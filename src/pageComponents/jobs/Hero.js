
function Hero() {
    return (
        <section id="hero-3" className="bg-scroll hero-section division">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6">
                        <div className="hero-3-txt white-color">
                            <h2 className="h2-lg wow fadeInUp">
                                Start your Journey
                            </h2>
                            <p className="p-xl wow fadeInUp">
                                werde Teil unseres Teams und begib dich mit uns auf eine spannende Reise auf der Suche nach neuen Innovationen und Produkten.
                            </p>
                            <div className="btns-group mb-30 wow fadeInUp">
                                {/*<VideoWithBtn defText="See how it works" id="7e90gBu4pas"/>*/}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="hero-3-img wow fadeInRight">
                            <img
                                className="img-fluid"
                                src="/images/people-coding-meeting.jpg"
                                alt="hero-image"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="wave-shape-bottom">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 195">
                    <path
                        fill="#ffffff"
                        fillOpacity={1}
                        d="M0,192L1440,96L1440,320L0,320Z"
                    />
                </svg>
            </div>
        </section>
    )
}

export default Hero;