import { useEffect, useState } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';

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
            </div>
            <Loader type="square-spin" />
        </>
    );
};

export default Projects;
