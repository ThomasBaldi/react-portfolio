import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';

const Contact = () => {
    const [lettersClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    }, []);

    const contact = 'Contact me';
    const strArr = Array.from(contact);
    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            lettersClass={lettersClass}
                            strArray={strArr}
                            idx={15}
                        />
                    </h1>
                </div>
            </div>
            <Loader type="square-spin" />
        </>
    );
};

export default Contact;
