import Link from "next/dist/client/link";
import React from "react";

function InfoMapQS() {
    return (
        <section
            id="content-6"
            className="content-6 wide-60 content-section division"
        >
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-xl-8">
                            <div className="section-title title-01 mb-70">
                                <h2 className="h2-md">
                                    MapQS - Die neue Dimension in der Qualitätssicherung
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <div className="img-block right-column wow fadeInLeft">
                            <img
                                className="img-fluid"
                                src="/images/Monitor-01.png"
                                alt="content-image"
                            />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <div className="txt-block left-column wow fadeInRight">
                            <div className="txt-box">
                                <p>
                                    <strong>
                                        Noch nie war die digitale Dokumentation in der Qualitätssicherung so einfach und
                                        effizient wie mit dem MapQS-System von MMW Analytics Solutions.
                                    </strong>
                                </p>
                                <p>
                                    MapQS ist ein System für die lückenlose digitale Dokumentation und Visualisierung
                                    für:
                                </p>
                                <ul className="simple-list pl-10">
                                    <li className="list-item">
                                        <p>
                                            Lebensmittel Verpackungsprozesse
                                        </p>
                                    </li>
                                    <li className="list-item">
                                        <p>
                                            Industrielle Schutzgasschweißen
                                        </p>
                                    </li>
                                    <li className="list-item">
                                        <p>
                                            Prozessanalytik
                                        </p>
                                    </li>
                                </ul>
                                <Link href="/products/mapqs">
                                    <a className="btn btn-blue tra-grey-hover mt-10">
                                        MapQS - Jetzt mehr erfahren
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InfoMapQS;