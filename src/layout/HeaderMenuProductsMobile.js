import Link from "next/link";

function HeaderMenuProductsMobile({mobileMenuToggle, toggleMenu}) {
    return (
        <li className="mg_link d-lg-none">
            <span
                className={`wsmenu-click ${
                    mobileMenuToggle === "home" ? "ws-activearrow" : ""
                }`}
                onClick={() => toggleMenu("home")}
            >
                <i className="wsmenu-arrow"/>
            </span>
            <Link href="#">
                <a>
                    Produkte <span className="wsarrow"/>
                </a>
            </Link>
            <div
                className="wsmegamenu w-75 clearfix"
                style={{
                    display: mobileMenuToggle === "home" ? "block" : "",
                }}
            >
                <div className="container">
                    <div className="row">
                        <ul>
                            <li>
                                 <span
                                     className={`wsmenu-click ${
                                         mobileMenuToggle === "home" ? "ws-activearrow" : ""
                                     }`}
                                     onClick={() => toggleMenu("home")}
                                 >
                                    <i className="wsmenu-arrow"/>
                                </span>
                                <Link href="#">
                                    <a>
                                        Gasmischer <span className="wsarrow"/>
                                    </a>
                                </Link>
                                <div
                                    className="wsmegamenu w-75 clearfix"
                                    style={{
                                        display: mobileMenuToggle === "home" ? "block" : "",
                                    }}
                                >
                                    <div className="container">
                                        <div className="row">
                                            <h6>Test</h6>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default HeaderMenuProductsMobile;


// <h3>{group.header}</h3>
// {group.items.map(itemsGroup => {
//     return (
//         <ul className="col-md-12 col-lg-3 link-list">
//             <h6>{itemsGroup.header}</h6>
//             {itemsGroup.items.map(item => {
//                 return (
//                     <li className="fst-li">
//                         <Link href={item.link}>
//                             {item.title}
//                         </Link>
//                     </li>
//                 )
//             })}
//         </ul>
//     )
// })}