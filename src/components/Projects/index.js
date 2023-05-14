import { useEffect, useState } from 'react';
import Flickity from 'react-flickity-component';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import LogoT from '../../assets/images/profile2.jpg';

const flickityOptions = {
    iautoPlay: true,
    contain: true,
    draggable: '>1',
    dragThreshold: 3,
    freeScroll: false,
    friction: 0.2,
    groupCells: false,
    pageDots: true,
    resize: true,
    wrapAround: false,
};
function Carousel() {
    return (
        <Flickity
            className={'carousel'} // default ''
            elementType={'div'} // default 'div'
            disableImagesLoaded={false} // default false
            options={flickityOptions}
            reloadOnUpdate // default false
            static // default false
        >
            <img className="carousel-image" src={LogoT} alt="" />
            <img className="carousel-image" src={LogoT} alt="" />
            <img className="carousel-image" src={LogoT} alt="" />
        </Flickity>
    );
}

const Projects = () => {
    const [lettersClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    }, []);
    const projects = 'My Projects';
    const strArr = Array.from(projects);

    return (
        <>
            <div className="container projects-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            lettersClass={lettersClass}
                            strArray={strArr}
                            idx={15}
                        />
                    </h1>
                    <p>A collection of my personal projects</p>
                </div>
                <Carousel />
            </div>
            <Loader type="square-spin" />
        </>
    );
};
export default Projects;
