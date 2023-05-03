import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {
    const [lettersClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    }, []);

    const contact = 'Contact me';
    const strArr = Array.from(contact);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_9132knt',
                'template_lie4bqt',
                refForm.current,
                'PASAUuSFCLRWx_ptE'
            )
            .then(
                () => {
                    alert('Message successfully sent!');
                    window.location.reload(false);
                },
                () => {
                    alert('Failed to send the message, please try again');
                }
            );
    };
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
                    <p>
                        I am interested in freelance and/or developer work
                        opportunities. However, if you have other requests or
                        questions, don't hesitate to contact me using the form
                        you find here bellow.
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        required
                                    />
                                </li>
                                <li className="half">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        type="text"
                                        name="message"
                                        placeholder="Message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input
                                        type="submit"
                                        className="flat-button"
                                        value="SEND"
                                    />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Thomas Baldi,
                    <br />
                    Norway
                    <br />
                    Søfteland, 5212
                    <br />
                    Bjørnafjorden
                    <br />
                    <span>baldithomas@hotmail.it</span>
                </div>
                <div className="map-wrap">
                    <MapContainer
                        center={[60.23720542538086, 5.445941601438426]}
                        zoom={10}
                    >
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker
                            position={[60.23720542538086, 5.445941601438426]}
                        >
                            <Popup>Here I am! :D</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="square-spin" />
        </>
    );
};

export default Contact;
