import React from "react";

function Content1() {
    return (
        <section
            id="content-2a"
            className="content-2 wide-60 content-section division mt-90"
        >
            <div className="container">
                <div className="row justify-content-center wow fadeInUp">
                    <div className="col-lg-9">
                        <div className="section-title">
                            <h4 className="">
                                Software-Entwicklung ist Deine Leidenschaft?<br/>
                                Neue innovative Technologien begeistern Dich tagein, tagaus?<br/>
                                Du willst gemeinsam mit uns die Welt verändern?
                            </h4>
                        </div>
                    </div>
                    <div className="col-lg-9 col-xl-9 mt-50">
                        <div className="section-title">
                            <h1 className="mb-15 text-uppercase">
                                <b>Dann bist du bei uns genau richtig!</b>
                            </h1>
                            <h3 className="p-xl">
                                Bei MMW ist jeder einzelne mit Leidenschaft bei der Sache. Das macht unsere Arbeit jeden Tag aufs Neue unglaublich lohnend, herausfordernd und unterhaltsam zugleich.
                            </h3>
                            <h3 className="p-xl mt-60">
                                Werde Teil unseres einzigartigen Teams, wir suchen Dich als ...
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="fbox-8-wrapper text-center mt-50 mt-lg-25">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                        <a className="col wow fadeInLeft mb-40 grey-hover"
                           href="/files/jobs/Stellenanzeige_frontend.pdf" target="_href">
                            <div className="wow fadeInUp">
                                <div className="fbox-5">
                                    <img
                                        className="img-fluid shadow-lg rounded-3"
                                        src="/images/cross-plattform-dev-illustration-min.jpg"
                                        alt="feature-icon"
                                    />
                                </div>
                                <h4 className="h5-md pt-10">Cross Plattform Developer (m/w/d)</h4>
                            </div>
                        </a>
                        <a className="col wow fadeInUp mb-40 grey-hover "
                             href="/files/jobs/Stellenanzeige_backend.pdf" target="_href">
                            <div className="wow fadeInUp">
                                <div className="fbox-5">
                                    <img
                                        className="img-fluid shadow-lg rounded-3"
                                        src="/images/backend-dev-illustration-min.jpg"
                                        alt="feature-icon"
                                    />
                                </div>
                                <h4 className="h5-md pt-10">C# .Net Core Developer (m/w/d)</h4>
                            </div>
                        </a>
                        <a className="col wow fadeInRight grey-hover"
                             href="/files/jobs/Stellenanzeige_web_frontend.pdf" target="_href">
                            <div className="wow fadeInUp">
                                <div className="fbox-5">
                                    <img
                                        className="img-fluid shadow-lg rounded-3"
                                        src="/images/web-dev-illustration-min.jpg"
                                        alt="feature-icon"
                                    />
                                </div>
                                <h4 className="h5-md pt-10">Web Developer (m/w/d)</h4>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Content1;