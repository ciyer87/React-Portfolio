import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Portfolio() {
    const [projects] = useState ([
        {
            image: 'goodvice_blog.png',
            alt: 'goodvice blog',
            title: 'Goodvice Blog',
            description: 'Chat Blog',
            code: '(Express.js/Node.js/MySQL2/CSS)',
            url: 'https://the-goodvice-blog.herokuapp.com/',
            git: 'https://github.com/crossigarcia/the-goodvice-blog'
        },
        {
            image: 'kara-ok-corral-screenshot.png',
            alt: 'karaoke site',
            title: 'Kara-ok-corral',
            description: 'Create karaoke list for your next party',
            code: '(MERN Stack)',
            url: 'https://the-kara-ok-corral.herokuapp.com/ ',
            git: 'https://github.com/costanza13/kara-ok-corral'
        },
        {
            image: 'weather.png',
            alt: 'Weather Vane',
            title: 'Weather Dashboard',
            description: 'current and 5 day weather forecast',
            code: '(API/HTML/CSS)',
            url: 'https://ciyer87.github.io/Weather-Dashboard/',
            git: 'https://github.com/ciyer87/Weather-Dashboard/'
        },
        {
            image: 'todo_color_variation.png',
            alt: 'notetaker app',
            title: 'Notetaker',
            description: 'To-Do list app',
            code: '(jQuery/Moment.js/Bootstrap)',
            url: 'https://safe-crag-82447.herokuapp.com/',
            git: 'https://github.com/ciyer87/note-taker'
        },
        {
            image: 'javascript-quiz.png',
            alt: 'quiz',
            title: 'JS Quiz',
            description: 'multiple choice quiz app',
            code: '(HTML/CSS/JavaScript/API)',
            url: 'https://ciyer87.github.io/Javascript-Quiz/',
            git: 'https://github.com/ciyer87/Javascript-Quiz'
        },
        {
            image: 'group-project-1.png',
            alt: 'Recipe App',
            title: 'Recipe App',
            description: 'recipe app',
            code: '(HTML/CSS/JQuery/API)',
            url: 'https://nicopetelo.github.io/whats-for-dinner/',
            git: 'https://github.com/nicopetelo/whats-for-dinner'
        }
    ])
    return (
       <div className="container">
             <div className="title">Portfolio</div>
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
                    
                        // </div>  
                    )}       
                </div>
        </div>
                
        )
    
}
            
      
    


export default Portfolio;