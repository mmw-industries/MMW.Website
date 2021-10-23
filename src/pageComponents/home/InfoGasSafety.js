import React from "react";
import Link from "next/dist/client/link";

function InfoGasSafety() {
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
                                    Gassicherheitstechnik
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-lg-6">
                        <div className="img-block right-column wow fadeInLeft">
                            <img
                                className="img-fluid"
                                src="/images/Bild_Fabrik_Industrie.png"
                                alt="content-image"
                            />
                        </div>
                    </div>
                    <div className="col-lg-1"/>
                    <div className="col-md-6 col-lg-5">
                        <div className="txt-block left-column wow fadeInRight">
                            <div className="txt-box">
                                <ul className="simple-list">
                                    <li className="list-item">
                                        <p className="p-lg">
                                            Gasaufbereitung
                                        </p>
                                    </li>
                                    <li className="list-item">
                                        <p className="p-lg">
                                            Sicherheitseinrichtungen
                                        </p>
                                    </li>
                                    <li className="list-item">
                                        <p className="p-lg">
                                            Flammenrückschlagventile
                                        </p>
                                    </li>
                                    <li className="list-item">
                                        <p className="p-lg">
                                            Gasrücktrittsicherungen
                                        </p>
                                    </li>
                                    <li className="list-item">
                                        <p className="p-lg">
                                            Sicherheitsventile
                                        </p>
                                    </li>
                                    <li className="list-item">
                                        <p className="p-lg">
                                            Überdruckventile
                                        </p>
                                    </li>
                                    <li className="list-item">
                                        <p className="p-lg">
                                            Feuchtemessgeräte
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
                </div>
            </div>
        </section>
    )
}

export default InfoGasSafety;