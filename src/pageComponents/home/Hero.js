import Slider from "react-slick";

function Hero() {
    const sliderSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1250,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        variableHeight: true,
        fade: true,
        cssEase: 'linear'
    };

    return (
        <section id="hero-3" className="bg-scroll hero-section division">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6">
                        <div className="hero-3-txt white-color">
                            <h3 className="h3-lg wow fadeInUp">
                                MMW Analytics Solutions ihr Spezialist für:
                            </h3>
                            <ul className="simple-list pt-50 pb-50">
                                <li>
                                    <a href="/products/mapqs">
                                        <p className="p-lg m-1">
                                            MapQS - Die neue Dimension in der Qualitätssicherung
                                        </p>
                                    </a>
                                </li>
                                <li>
                                    <p className="p-lg m-1">
                                        Gasverfahrenstechnik - Prozessanalytik
                                    </p>
                                </li>
                                <li>
                                    <p className="p-lg m-1">
                                        Gassicherheitstechnik
                                    </p>
                                </li>
                                <li>
                                    <p className="p-lg m-1">
                                        Servicedienstleistungen
                                    </p>
                                </li>
                                <li>
                                    <p className="p-lg m-1">
                                        individuelle Softwareentwicklung
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="hero-3-img wow fadeInRight">
                            <Slider {...sliderSettings}>
                                <div>
                                    <img
                                        className="img-fluid pl-20 pr-20"
                                        src="/images/tablet-01.png"
                                        alt="hero-image"
                                    />
                                </div>
                                <div className='pl-20 pr-20'>
                                    <img
                                        className="img-fluid rounded-3"
                                        src="/images/factory-worker-service.jpg"
                                        alt="hero-image"
                                    />
                                </div>
                                <div className='pl-20 pr-20'>
                                    <img
                                        className="img-fluid rounded-3"
                                        src="/images/coding1.jpg"
                                        alt="hero-image"
                                    />
                                </div>
                            </Slider>
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