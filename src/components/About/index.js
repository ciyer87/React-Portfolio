import React from 'react';

function About() {
  return (
    <section className="container">
            <div className="title">
                    About Me
            </div>
            <div className="about">
                
                <div className="pic">
                    <img className="pic" src={require(`../../assets/images/chitra.jpg`).default} alt="Chitra Padmanabhan" />
                </div>
                <div className="text">
                    <h2>Engineering Manager</h2>
                    <p className="mTopBottom">
                        Proven leadership characteristics and have successfully managed high performing engineering teams 
                        in an Agile environment. I am known as a detail-oriented professional who has been consistently 
                        praised as quality-oriented by my co-workers and management.</p>
                    <p className="mTopBottom">
                        I am self-motivated and can work alone to meet deadlines or with a team of developers. 
                        I have consistently demonstrated teamwork, problem-solving and interpersonal abilities in 
                        every aspect of my previous role. I enjoy learning new technologies and have motivation to learn, 
                        and to overcome unique challenges. I am looking for an environment that will allow me to 
                        reach my full potential.
                    </p>

                </div>
            </div>
        </section>
    );
};


export default About;