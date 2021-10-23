function Content1() {
    return (
        <section
            id="content-2a"
            className="content-2 wide-60 content-section division mt-90"
        >
            <div className="container">
                <div className="row justify-content-center wow fadeInUp">
                    <div className="col-lg-10 col-xl-8">
                        <div className="section-title title-01">
                            <h2 className="h2-md">
                                MapQS - Was ist das ?
                            </h2>
                            <p className="p-xl">
                                MapQS ist ein System für die lückenlose digitale Dokumentation
                                und Visualisierung für folgende Anwendungsbereiche:
                            </p>
                        </div>
                    </div>
                </div>
                <div className="fbox-8-wrapper text-center">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                        <div className="col wow fadeInLeft mb-40">
                            <div className="wow fadeInUp">
                                <div className="fbox-5">
                                    <img
                                        className="img-fluid shadow-lg rounded-3"
                                        src="/images/industries/food-industry.jpg"
                                        alt="feature-icon"
                                    />
                                </div>
                                <h4 className="h5-md pt-10">Lebensmittel Verpackungsprozesse</h4>
                            </div>
                        </div>
                        <div className="col wow fadeInUp mb-40">
                            <div className="wow fadeInUp">
                                <div className="fbox-5">
                                    <img
                                        className="img-fluid shadow-lg rounded-3"
                                        src="/images/industries/welding.jpg"
                                        alt="feature-icon"
                                    />
                                </div>
                                <h4 className="h5-md pt-10">Industrielles Schutzgasschweißen</h4>
                            </div>
                        </div>
                        <div className="col wow fadeInRight">
                            <div className="wow fadeInUp">
                                <div className="fbox-5">
                                    <img
                                        className="img-fluid shadow-lg rounded-3"
                                        src="/images/industries/welding.jpg"
                                        alt="feature-icon"
                                    />
                                </div>
                                <h4 className="h5-md pt-10">Prozessanalytik</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Content1;