import Link from "next/link";

function HeaderMenuCompany({mobileMenuToggle, toggleMenu}) {
    return (
        <li className="mg_link d-none d-lg-flex">
            <span
                className={`wsmenu-click ${
                    mobileMenuToggle === "home" ? "ws-activearrow" : ""
                }`}
                onClick={() => toggleMenu("home")}
            >
                <i className="wsmenu-arrow"/>
            </span>
            <Link href="/company">
                <a>
                    Unternehmen <span className="wsarrow"/>
                </a>
            </Link>
            <div
                className="wsmegamenu w-80 clearfix"
                style={{
                    display: mobileMenuToggle === "home" ? "block" : "",
                }}
            >
                <div>
                    <Link href="/company">
                        <h4 style={{paddingLeft: 5, paddingTop: 10, paddingBottom: 0, cursor: 'pointer'}}>
                            Unternehmen
                        </h4>
                    </Link>
                    <hr style={{marginLeft: -10, marginRight: -10, color: 'gray'}}/>
                    <div
                        className="d-flex flex-wrap"
                        style={{rowGap: 40}}
                    >
                        {/*<ul key="123123123"*/}
                        {/*    className="col-md-12 col-lg-4"*/}
                        {/*    style={{textAlign: 'left'}}*/}
                        {/*>*/}
                        {/*    <h6>*/}
                        {/*        Information*/}
                        {/*    </h6>*/}
                        {/*    <li key="112321312423423423134"*/}
                        {/*        style={{paddingLeft: 5}}*/}
                        {/*    >*/}
                        {/*        <Link*/}
                        {/*            href="#"*/}
                        {/*        >*/}
                        {/*            Unser Team*/}
                        {/*        </Link>*/}
                        {/*    </li>*/}
                        {/*</ul>*/}
                        <ul key="123123123"
                            className="col-md-12 col-lg-4"
                            style={{textAlign: 'left'}}
                        >
                            <h6>
                                Vision
                            </h6>
                            <li key="112321312423423423134"
                                style={{paddingLeft: 5}}
                            >
                                <Link
                                    href="/vision#misson"
                                >
                                    Leitbild
                                </Link>
                            </li>
                            <li key="112321312423423423134"
                                style={{paddingLeft: 5}}
                            >
                                <Link
                                    href="/vision#goals"
                                >
                                    Ziele
                                </Link>
                            </li>
                        </ul>
                        {/*<ul key="123123123"*/}
                        {/*    className="col-md-12 col-lg-4"*/}
                        {/*    style={{textAlign: 'left'}}*/}
                        {/*>*/}
                        {/*    <h6>*/}
                        {/*        Partner*/}
                        {/*    </h6>*/}
                        {/*</ul>*/}
                    </div>
                </div>
            </div>
        </li>
    )
}

export default HeaderMenuCompany;