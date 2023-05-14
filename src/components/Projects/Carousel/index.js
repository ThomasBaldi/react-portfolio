import React, { Component } from 'react';
import Slider from 'react-slick';
import './index.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LogoT from '../../../assets/images/profile2.jpg';

class Carousel extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        };
        return (
            <Slider {...settings} className="carousel">
                <div className="slide-continer">
                    <h3>1</h3>
                    <img className="carousel-image" src={LogoT} alt="" />
                </div>
                <div className="slide-continer">
                    <h3>2</h3>
                </div>
                <div className="slide-continer">
                    <h3>3</h3>
                </div>
            </Slider>
        );
    }
}
export default Carousel;
