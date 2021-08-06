import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function About() {
    return (
        <section className="container">
            <div className="contactme">
                <div className="pic">
                    <img className="pic" src={require(`../../assets/images/chitra.jpg`).default} alt="Russ Tracy" />
                </div>
                <div className="text">
                    <div className="title">Contact me</div>
                    <div className="mAll">
                        <a href="mailto:chitra.iyer00@gmail.com">
                            <FontAwesomeIcon icon={["fas", "envelope-square"]} size="1x" color="#607d8b" />
                        </a> <a href="mailto:chitra.iyer00@gmail.com">chitra.iyer00@gmail.com</a>
                    </div>
                    <div className="mAll">
                        <div>
                            <FontAwesomeIcon icon={["fas", "mobile-alt"]} size="1x" color="#607d8b" /> (650)-346-1836

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;