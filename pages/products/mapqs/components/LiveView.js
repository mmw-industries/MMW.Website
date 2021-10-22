function LiveView() {
    return (
        <section
            id="content-7"
            className="content-7 bg-whitesmoke wide-60 content-section division"
        >
            <div className="container">
                <div className="row d-flex">
                    <div className="row justify-content-center wow fadeInUp mb-30">
                        <div className="col-lg-10 col-xl-8">
                            <div className="section-title title-01 mb-40">
                                <h2 className="h2-md">
                                    Das MapQS Web-Interface
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 order-first order-md-2 pt-50">
                        <div className="txt-block left-column wow fadeInLeft">
                            <div className="txt-box mb-25">
                                <h5 className="h5-lg">
                                    Liveansicht
                                </h5>
                                <p className="p-lg">
                                    Mit der MapQS Liveansicht haben Sie immer die aktuellsten Daten
                                    Ihrer Prozesse im Überblick.
                                </p>
                            </div>
                            <hr/>
                            <div className="txt-box mb-25">
                                <h5 className="h5-lg">
                                    Messungen
                                </h5>
                                <p className="p-lg">
                                    Aufgezeichnete Daten sind nach Datum und Uhrzeit selektierbar.
                                    Die Messungen werden in einer übersichtlichen grafischen Darstellung angezeigt.
                                </p>
                            </div>
                            <hr/>
                            <div className="txt-box">
                                {/* Title */}
                                <h5 className="h5-lg">
                                    Ereignisse
                                </h5>
                                <p className="p-lg">
                                    Eventuelle während der Aufzeichnung aufgetretene Anomalien werden markiert
                                    und zusätzlich in einer übersichtlichen Ereigniss-Tabelle aufgelistet.
                                    Somit ist eine einfache Nachverfolgung jederzeit gewährleistet.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 order-first order-md-2">
                        <div className="content-7-img wow fadeInRight">
                            <img
                                className="img-fluid"
                                src="/images/monitor-01.png"
                                alt="content-image"
                            />
                        </div>
                    </div>
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </section>
    )
}

export default LiveView;