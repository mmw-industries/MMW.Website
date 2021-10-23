import Link from "next/dist/client/link";
import React from "react";

function InfoGasMischAnalyse() {
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
                                    Gasverfahrenstechnik - Prozessanalytik
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1 col-md-0"/>
                    <div className="col-12 col-md-12 col-lg-5">
                        <div className="txt-block left-column wow fadeInRight">
                            <div className="txt-box">
                                <ul className="simple-list">
                                    <li className="list-item">
                                        <p className="p-lg">
                                            Gasmischer
                                        </p>
                                    </li>
                                    <li className="list-item">
                                        <p className="p-lg">
                                            Gasanalysatoren
                                        </p>
                                    </li>
                                    <li className="list-item">
                                        <p className="p-lg">
                                            Dichtheitsprüfung für Verpackungen
                                        </p>
                                    </li>
                                    <li className="list-item">
                                        <p className="p-lg">
                                            Gasfilter
                                        </p>
                                    </li>
                                    <li className="list-item">
                                        <p className="p-lg">
                                            Gas-Dosierventile
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
                    <div className="col-12 col-md-8 col-lg-6 order-first order-md-first order-lg-last">
                        <div className="img-block right-column wow fadeInLeft">
                            <img
                                className="img-fluid"
                                src="/images/Bild_Fabrik_MAP.png"
                                alt="content-image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InfoGasMischAnalyse;