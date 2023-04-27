import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LogoTitle from '../../assets/images/logo-t.png';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';

const Home = () => {
    const [lettersClass, setLetterClass] = useState('text-animate');
    const name = 'homas';
    const nameArray = Array.from(name);
    const job = 'a software developer.';
    const jobArray = Array.from(job);

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    }, []);

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={lettersClass}>H</span>
                    <span className={`${lettersClass} _12`}>i,</span>
                    <br />
                    <span className={`${lettersClass} _13`}>I</span>
                    <span className={`${lettersClass} _14`}>'m</span>
                    <img src={LogoTitle} alt="developer" />
                    <AnimatedLetters
                        lettersClass={lettersClass}
                        strArray={nameArray}
                        idx={15}
                    />
                    <br />
                    <AnimatedLetters
                        lettersClass={lettersClass}
                        strArray={jobArray}
                        idx={22}
                    />
                </h1>
                <h2>Backend Developer / Technology enthusiast / Polyglot</h2>
                <Link to="/contact" className="flat-button">
                    CONTACT
                </Link>
            </div>
            <Logo />
        </div>
    );
};

export default Home;
