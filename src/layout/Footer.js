const Footer = () => {
    return (
        <footer id="footer-1" className="footer division">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="footer-info mb-40">
                            <img
                                className="mb-25"
                                style={{maxHeight: 120}}
                                src="/images/logo/logo.png"
                                alt="footer-logo"
                            />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-2">
                        <div className="footer-links mb-40">
                            <ul className="foo-links text-secondary clearfix">
                                <li>
                                    <p className="p-md">
                                        <a href="/contacts">Kontakt</a>
                                    </p>
                                </li>
                                <li>
                                    <p className="p-md">
                                        <a href="/impressum">Impressum</a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-2">
                        <div className="footer-links mb-40">
                            <ul className="foo-links text-secondary clearfix">
                                <li>
                                    <p className="p-md">
                                        <a href="/privacy">Datenschutz</a>
                                    </p>
                                </li>
                                <li>
                                    <p className="p-md">
                                        <a href="/agb">AGB's</a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="bottom-footer">
                    <div className="row row-cols-1 row-cols-md-2 d-flex align-items-center">
                        <div className="col">
                            <div className="footer-copyright">
                                <p>
                                    © 2019 - {new Date().getFullYear()} MMW Analytics Solutions GmbH. All Rights
                                    Reserved
                                </p>
                            </div>
                        </div>
                        <div className="col">
                            <ul className="bottom-footer-list text-secondary text-end">
                                <li className="first-li">
                                    <p>
                                        <a href="https://www.facebook.com/mmwindustries"
                                           target="_blank"
                                        >
                                            Facebook</a>
                                    </p>
                                </li>
                                <li className="last-li">
                                    <p>
                                        <a
                                            href="https://instagram.com/"
                                            target="_blank"
                                        >
                                            Instagram
                                        </a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
