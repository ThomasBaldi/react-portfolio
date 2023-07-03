import React, { Component } from 'react';
import Slider from 'react-slick';
import './index.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import scraper from '../../../assets/images/scraperNews.jpg';
import portfolio from '../../../assets/images/portfolio.jpg';
import mortgage from '../../../assets/images/mortgage.jpg';
import mementod from '../../../assets/images/mementod.jpg';

class Carousel extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 700,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,

            centered: true,

            autoplay: true,
            autoplaySpeed: 4000,
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
                        <img
                            className="carousel-image"
                            src={scraper}
                            alt="Thomas Baldi NewsScraper"
                        />
                    </a>
                    <a
                        href="https://scraper-news.cyclic.app/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h4>deployed scraper-news</h4>
                    </a>
                </div>
                <div className="slide-continer">
                    <a
                        href="https://github.com/ThomasBaldi/Mementod"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h2>Mementod</h2>
                        <img className="carousel-image" src={mementod} alt="" />
                    </a>
                    <a
                        href="https://github.com/ThomasBaldi/Mementod"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h4>not deployed</h4>
                    </a>
                </div>
                <div className="slide-continer">
                    <a
                        href="https://github.com/ThomasBaldi/react-portfolio"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h2>React Portfolio</h2>
                        <img
                            className="carousel-image"
                            src={portfolio}
                            alt="Thomas Baldi Portfolio"
                        />
                    </a>
                    <a
                        href="https://thomasbaldi.github.io/react-portfolio/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h4>deployed react-portfolio</h4>
                    </a>
                </div>
                <div className="slide-continer">
                    <a
                        href="https://github.com/ThomasBaldi/first-react-app"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h2>Mortgage Calculator</h2>
                        <img className="carousel-image" src={mortgage} alt="" />
                    </a>
                    <a
                        href="https://thomasbaldi.github.io/first-react-app/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h4>deployed first-react-app</h4>
                    </a>
                </div>
            </Slider>
        );
    }
}
export default Carousel;
