import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCss3,
    faDocker,
    faGitAlt,
    faJsSquare,
    faNodeJs,
    faReact,
} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
    const [lettersClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    }, []);

    const about = 'About me';
    const strArr = Array.from(about);
    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            lettersClass={lettersClass}
                            strArray={strArr}
                            idx={15}
                        />
                    </h1>
                    <div className="paragraphs">
                        <p>
                            I'm an ambitious and curious person, born in the
                            90's, in the mists of the technologically
                            revolutionary decade. Becoming a developer felt
                            therefore like a natural choice and I am looking
                            forward to kickstart my career as a developer in a
                            role filled with challenges, variating technologies
                            and diverse projects.
                        </p>
                        <p>
                            I'm quietly confident, versatile by nature, and
                            constantly working on improving my technical skill
                            set and on learning new things in life, may it be
                            for professional reasons or for personal
                            gratification.
                        </p>
                        <p>
                            If I had to describe myself in a nutshell, I'd say
                            that I'm a family person, a proud father of a
                            beautiful son, a nature and travel lover, a skier in
                            winter and a diver in summer, and last but not
                            least, as a true italo-norwegian, I talk from the
                            heart (at times also with my hands), but
                            pragmatically think about what I'll say first.
                        </p>
                    </div>
                </div>
            </div>
            <div className="stage-cube-cont">
                <div className="moveWrap">
                    <div className="cubespinner">
                        <div id="face1" className="face">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div id="face2" className="face">
                            <FontAwesomeIcon icon={faNodeJs} color="#6CC24A" />
                        </div>
                        <div id="face3" className="face">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                        <div id="face4" className="face">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div id="face5" className="face">
                            <FontAwesomeIcon
                                icon={faJsSquare}
                                color="#EFD81D"
                            />
                        </div>
                        <div id="face6" className="face">
                            <FontAwesomeIcon icon={faDocker} color="#0DB7ED" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="square-spin" />
        </>
    );
};

export default About;
