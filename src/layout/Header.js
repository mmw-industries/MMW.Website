import Link from "next/link";
import {useEffect, useState} from "react";
import {scroll} from "../utils/utils";
import HeaderMenuProducts from "./HeaderMenuProducts";
import HeaderMenuProductsMobile from "./HeaderMenuProductsMobile";

const Header = ({
                    navLight,
                    whiteLogo,
                    getStartText,
                    btnCustomHover,
                    navHoverColor,
                    singlePage,
                }) => {

    useEffect(() => {
        window.addEventListener("scroll", scroll);
    }, []);

    const [toggle, setToggle] = useState(false);
    const [mobileMenuToggle, setMobileMenuToggle] = useState("");

    const toggleFun = () => {
        setToggle(!toggle);
        document.querySelector("body").classList.toggle("wsactive");
    };
    const toggleMenu = (value) => {
        setMobileMenuToggle(mobileMenuToggle !== value ? value : "");
    };

    return (
        <header
            id="header"
            className={`header tra-menu ${navLight ? "navbar-light" : "navbar-dark"}`}
        >
            <div className="header-wrapper">
                {/* MOBILE HEADER */}
                <div className="wsmobileheader clearfix">
                    <Link href="/">
                         <span className="smllogo">
                            <img src="/images/logo/logo.png" alt="mobile-logo"/>
                        </span>
                    </Link>
                    <a
                        id="wsnavtoggle"
                        onClick={() => toggleFun()}
                        className="wsanimated-arrow"
                    >
                        <span/>
                    </a>
                </div>
                {/* NAVIGATION MENU */}
                <div className="wsmainfull menu clearfix">
                    <div className="wsmainwp clearfix">
                        {/* HEADER LOGO */}
                        <div className="desktoplogo">
                            <Link href="/">
                                <a className="logo-black">
                                    <img src="/images/logo/logo.png" alt="header-logo"/>
                                </a>
                            </Link>
                        </div>
                        <div className="desktoplogo">
                            <Link href="/">
                                <a className="logo-white">
                                    <img
                                        src="/images/logo/logo-white.png"
                                        alt="header-logo"
                                    />
                                </a>
                            </Link>
                        </div>

                        {/* MAIN MENU */}
                        <nav className="wsmenu clearfix"
                             style={{float: 'left'}}
                        >
                            <div className="overlapblackbg" onClick={() => toggleFun()}/>
                            <ul
                                className={`wsmenu-list ${
                                    navHoverColor ? navHoverColor : "nav-skyblue-hover"
                                }`}
                            >
                                <HeaderMenuProducts
                                    mobileMenuToggle={mobileMenuToggle}
                                    toggleMenu={toggleMenu}
                                />
                            </ul>
                        </nav>
                        <nav className="wsmenu clearfix"
                        >
                            <div className="overlapblackbg" onClick={() => toggleFun()}/>
                            <ul
                                className={`wsmenu-list ${
                                    navHoverColor ? navHoverColor : "nav-skyblue-hover"
                                }`}
                            >
                                <li className="nl-simple d-lg-none w-100">
                                    <Link href="/products">Produkte</Link>
                                </li>
                                <li className="nl-simple">
                                    <Link href="/contacts">Kontakt</Link>
                                </li>
                                {/* HEADER SOCIAL LINKS
									<li class="nl-simple white-color header-socials ico-20 clearfix" >
										<span><Link href="#" class="ico-facebook"><span class="flaticon-facebook"></span></Link></span>
										<span><Link href="#" class="ico-twitter"><span class="flaticon-twitter"></span></Link></span>
										<span><Link href="#" class="ico-instagram"><span class="flaticon-instagram"></span></Link></span>
										<span><Link href="#" class="ico-dribbble"><span class="flaticon-dribbble"></span></Link></span>
									</li> */}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
