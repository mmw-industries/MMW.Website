import Link from "next/dist/client/link";
import React from "react";

function InfoService() {
    return (
        <section
            id="content-6"
            className="content-6 wide-60 content-section division"
        >
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="row order-first justify-content-center">
                        <div className="col-lg-10 col-xl-8">
                            <div className="section-title title-01 mb-70">
                                <h2 className="h2-md">
                                    Servicedienstleistungen
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1 col-md-0"/>
                    <div className="col-md-6 col-lg-5">
                        <div className="txt-block left-column wow fadeInRight">
                            <div className="txt-box">
                                <ul className="simple-list">
                                    <li className="list-item">
                                        <p className="p-lg">
                                            Planung und Entwicklung
                                        </p>
                                    </li>
                                    <li className="list-item">
                                        <p className="p-lg">
                                            Reparaturen, Wartungen, Kalibrierungen
                                        </p>
                                        <p style={{fontSize: 11, marginTop: -15}}
                                           className="txt-400">
                                            Sehr gerne auch bei Ihnen im Haus.
                                        </p>
                                    </li>
                                    <li className="list-item">
                                        <p className="p-lg">
                                            Wartungsmonitoring
                                        </p>
                                    </li>
                                    <li className="list-item">
                                        <p className="p-lg">
                                            Montagen und Inbetriebnahmen
                                        </p>
                                    </li>
                                    <li className="list-item">
                                        <p className="p-lg">
                                            Belastungs- und Dichtheitsprüfungen
                                        </p>
                                    </li>
                                    <li className="list-item">
                                        <p className="p-lg">
                                            Vorort Analysen
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
                    </div>
                    <div className="col-md-8 col-lg-6 order-first order-md-first order-lg-last">
                        <div className="img-block right-column wow fadeInLeft">
                            <img
                                className="img-fluid shadow-lg rounded-3"
                                src="/images/factory-worker-service.jpg"
                                alt="content-image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InfoService;