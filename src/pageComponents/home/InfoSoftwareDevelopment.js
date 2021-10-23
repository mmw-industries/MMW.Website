import Link from "next/dist/client/link";

function InfoSoftwareDevelopment() {
    return (
        <section
            id="content-1"
            className="content-1 pb-60 pt-60 bg-whitesmoke content-section division"
        >
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-12 col-lg-6 order-first order-md-first">
                        <div className="txt-block left-column wow fadeInRight">
                            <span className="section-id txt-upcase">INNOVATIV | ZUKUNFTSSICHER | INDIVIDUELL</span>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6 order-first order-md-1">
                        <div className="txt-block left-column wow fadeInRight">
                            <h2 className="h2-xs">
                                SOFTWARE ENTWICKLUNG
                            </h2>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6 order-last order-md-3">
                        <div className="txt-block left-column wow fadeInRight">
                            <ul className="simple-list">
                                <li className="list-item">
                                    <p className="p-lg">
                                        Mit unseren individuell entwickelten Softwarelösungen verfügt MMW Analytics
                                        Solutions über jahrzehntelanges Know-how im Bereich der Softwareentwicklung aus
                                        der Metall-,
                                        Multimedia- und Automobilindustrie.
                                    </p>
                                </li>
                                <li className="list-item">
                                    <p className="p-lg">
                                        Unsere Lösungen für Ihre Zufriedenheit und Ihren Erfolg, denn wir schauen
                                        innovativ in die Zukunft.
                                    </p>
                                </li>
                            </ul>
                            <Link href="/contacts">
                                <a className="btn btn-blue tra-grey-hover mt-10">
                                    Jetzt mehr erfahren
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-8 col-lg-6 order-first order-md-2">
                        <div className="rel img-block right-column wow fadeInLeft">
                            <img
                                className="img-fluid"
                                src="/images/img-17.png"
                                alt="content-image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InfoSoftwareDevelopment;