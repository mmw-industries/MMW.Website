import Slider from "react-slick";

function ProductImageSlider({data}) {
    const sliderSettings = {
        dots: true,
        dotsClass: "d-flex align-items-center justify-content-begin gap-2 mt-15",
        arrows: false,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 5000,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        autoplay: true,
        fade: true,
        cssEase: 'linear',
        customPaging: function (i) {
            return (
                <img
                    className="slider-dot-item"
                    style={{objectFit: 'contain'}}
                    src={data.productImages[i]}
                    width={75}
                    height={75}
                />
            );
        },
    };
    return (
        <>
            <Slider {...sliderSettings}>
                {data.productImages.map(image => {
                    return (
                        <img
                            key={image}
                            className="product-image"
                            src={image}
                            width={450}
                            height={450}
                        />
                    )
                })}
            </Slider>
        </>
    )
}

export default ProductImageSlider;