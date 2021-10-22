function ThreeSteps() {
    return (
        <section id="features-8"
                 className="wide-60 features-section division mb-90">
            <div className="container">
                {/* SECTION TITLE */}
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-xl-8">
                        <div className="section-title title-01 mb-70">
                            <h2 className="h2-md">Was MapQS für Sie macht ?</h2>
                            <p className="p-xl">
                                MapQS übernimmt die folgenden drei Schritte für Sie, um eine lückenlose digitale Dokumentation
                                Ihrer gesamten Prozesse sicher zu stellen:
                            </p>
                        </div>
                    </div>
                </div>
                <div className="fbox-8-wrapper text-center">
                    <div className="row row-cols-1 row-cols-md-3">
                        <div className="col">
                            <div className="fbox-8 mb-40 wow fadeInUp">
                                <div className="fbox-img bg-whitesmoke-gradient">
                                    <img
                                        className="img-fluid"
                                        style={{maxHeight: 150}}
                                        src="/images/illustrations/data-collection.png"
                                        alt="feature-icon"
                                    />
                                </div>
                                <h5 className="h5-md">Daten-Erfassung</h5>
                                <p className="p-lg">
                                    Die Daten der angeschlossenen Geräte werden über
                                    die verschiedensten Schnittstellen gesammelt.
                                </p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="fbox-8 mb-40 wow fadeInUp">
                                {/* Image */}
                                <div className="fbox-img bg-whitesmoke-gradient">
                                    <img
                                        className="img-fluid"
                                        style={{maxHeight: 150}}
                                        src="/images/illustrations/data-save.png"
                                        alt="feature-icon"
                                    />
                                </div>
                                <h5 className="h5-md">Aufzeichnung</h5>
                                <p className="p-lg">
                                    Die gesammelten Daten werden analysiert und im Sekunden-Rhythmus
                                    im internen Speicher des MapQS-Interface gespeichert.
                                </p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="fbox-8 mb-40 wow fadeInUp">
                                {/* Image */}
                                <div className="fbox-img bg-whitesmoke-gradient">
                                    <img
                                        className="img-fluid"
                                        style={{maxHeight: 150}}
                                        src="/images/illustrations/data-analyse.png"
                                        alt="feature-icon"
                                    />
                                </div>
                                <h5 className="h5-md">Auswertung</h5>
                                <p className="p-lg">
                                    Liveansicht sowie Messdatenauswertung einfach und unkompliziert über
                                    jeden modernen Webbrowser möglich.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ThreeSteps;