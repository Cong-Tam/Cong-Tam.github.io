import React from 'react'
import PropTypes from 'prop-types'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSlider = props => {
    var settings = {
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
    };

    return (
        <Slider {...settings}>
            {
                props.data.map((item, index) => (
                    <div key={index} className="hero-slider__item">
                        <img src={item.img} alt="" />
                    </div>
                ))
            }
        </Slider>
    )
}

HeroSlider.propTypes = {
    data: PropTypes.array.isRequired
}

export default HeroSlider