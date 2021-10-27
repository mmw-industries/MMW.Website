import Slider from "react-slick";

function Brands() {
    const setting = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const brands = [
        {
            title: "Wewalka GmbH Nfg. KG",
            logo: "/images/company-logos/Wewalka_LOGO_RGB.png",
            link: "https://wewalka.com/de/"
        },
        {
            title: "Mondi Korneuburg GmbH",
            logo: "/images/company-logos/mondi-logo.png",
            link: "https://www.mondigroup.com/en/home/"
        },
        {
            title: "SalzburgMilch GmbH",
            logo: "/images/company-logos/SalzburgMilch_Logo.png",
            link: "https://www.milch.com/"
        },
        {
            title: "Gittis Naturprodukte GmbH",
            logo: "/images/company-logos/gittis.png",
            link: "https://www.gittis.at/"
        },
        {
            title: "Wewalka GmbH Nfg. KG",
            logo: "/images/company-logos/Wewalka_LOGO_RGB.png",
            link: "https://wewalka.com/de/"
        },
        {
            title: "Mondi Korneuburg GmbH",
            logo: "/images/company-logos/mondi-logo.png",
            link: "https://www.mondigroup.com/en/home/"
        },
        {
            title: "SalzburgMilch GmbH",
            logo: "/images/company-logos/SalzburgMilch_Logo.png",
            link: "https://www.milch.com/"
        },
        {
            title: "Gittis Naturprodukte GmbH",
            logo: "/images/company-logos/gittis.png",
            link: "https://www.gittis.at/"
        },
    ]

    return (
        <div id="brands-1" className="wide-100 brands-section division">
            <div className="container">
                <div className="row">
                    <div className="col text-center align-items-center">
                        <Slider {...setting} className="owl-carousel brands-carousel">
                            {brands.map(brand => {
                                return (
                                    <a
                                        href={brand.link}
                                        target="_blank"
                                        className="brand-logo">
                                        <img
                                            className="w-100"
                                            style={{objectFit: 'contain'}}
                                            width={260}
                                            height={260}
                                            src={brand.logo}
                                            alt="brand-logo"
                                        />
                                    </a>
                                )
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brands;
