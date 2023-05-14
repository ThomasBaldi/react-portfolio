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
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
            centered: true,
            centerPadding: '10vw',
            autoplay: true,
            autoplaySpeed: 6000,
            cssEase: 'linear',
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
                    <a
                        href="https://github.com/ThomasBaldi/ScraperNews"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h2>ScraperNews</h2>
                    </a>
                    <img className="carousel-image" src={LogoT} alt="" />
                </div>
                <div className="slide-continer">
                    <a
                        href="https://github.com/ThomasBaldi/hotelProject"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h2>Bookaroo</h2>
                    </a>
                    <img className="carousel-image" src={LogoT} alt="" />
                </div>
                <div className="slide-continer">
                    <a
                        href="https://github.com/ThomasBaldi/react-portfolio"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {' '}
                        <h2>React Portfolio</h2>
                    </a>
                    <img className="carousel-image" src={LogoT} alt="" />
                </div>
                <div className="slide-continer">
                    <a
                        href="https://github.com/ThomasBaldi/first-react-app"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h2>Mortgage Calculator</h2>
                    </a>
                    <img className="carousel-image" src={LogoT} alt="" />
                </div>
            </Slider>
        );
    }
}
export default Carousel;
