import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Portfolio() {
    const [projects] = useState ([
        {
            image: 'goodvice_blog.png',
            alt: 'goodvice blog',
            title: 'goodvice blog',
            description: 'A blog site to get input from audience',
            code: '(Express.js/Node.js/MySQL2/CSS)',
            url: 'https://the-goodvice-blog.herokuapp.com/',
            git: 'https://github.com/crossigarcia/the-goodvice-blog'
        },
        {
            image: 'password.png',
            alt: 'password generator',
            title: 'password generator',
            description: 'An app to generate random password',
            code: '(HTML/CSS/JS)',
            url: 'https://ciyer87.github.io/password-generator/',
            git: 'https://github.com/ciyer87/password-generator/'
        },
        {
            image: 'weather.png',
            alt: 'Weather Vane',
            title: 'weather dashboard',
            description: 'An app to view the current and 5 day weather forecast based on the city entered by user',
            code: '(OpenWeather API/HTML/CSS)',
            url: 'https://ciyer87.github.io/Weather-Dashboard/',
            git: 'https://github.com/ciyer87/Weather-Dashboard/'
        },
        {
            image: 'todo_color_variation.png',
            alt: 'notetaker app',
            title: 'notetaker app',
            description: 'An app to keep track of to-do list',
            code: '(jQuery/Moment.js/Bootstrap)',
            url: 'https://safe-crag-82447.herokuapp.com/',
            git: 'https://github.com/ciyer87/note-taker'
        },
        {
            image: 'javascript-quiz.png',
            alt: 'quiz',
            title: 'javascript quiz',
            description: 'An online multiple choice quiz app',
            code: '(HTML/CSS/JavaScript/WebAPI)',
            url: 'https://ciyer87.github.io/Javascript-Quiz/',
            git: 'https://github.com/ciyer87/Javascript-Quiz'
        },
        {
            image: 'group-project-1.png',
            alt: 'recipe app',
            title: 'recipe app',
            description: 'An recipe app that allows users to search based on ingredients or category',
            code: '(HTML/CSS/JQuery/UIKit/3rd party API)',
            url: 'https://nicopetelo.github.io/whats-for-dinner/',
            git: 'https://github.com/nicopetelo/whats-for-dinner'
        }
    ])
    return (
       <div className="container">
            <h2 className="title">Portfolio</h2>
                <div className="main">
                    {projects.map((project, i) =>
                        <div className="picture" key={i}>
                            <img src={require(`../../assets/images/${project.image}`).default} alt={project.alt} />
                                <div className="overlay">
                                    <div className="overlaytext">
                                        <h3>{project.title}</h3>
                                        <p>{project.description}<br /><span>{project.code}</span></p>
                                        <a href={project.url} target="_blank" rel="noreferrer">View Site</a>
                                        <a href={project.git} target="_blank" rel="noreferrer">
                                        {/* <FontAwesomeIcon icon={["fab", "github"]} size="1x" color="#ffffff" /> */}
                                            <i className="fab fa-git-square"></i>
                                        </a>
                                    </div>    
                                </div>    

                           
                    
                        </div>  
                    )}       
                </div>
        </div>
                
        )
    
}
            
      
    


export default Portfolio;