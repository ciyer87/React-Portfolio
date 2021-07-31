import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Portfolio() {
    const [projects] = useState ([
        {
            image: 'goodvice_blog.png',
            alt: 'goodvice blog',
            title: 'goodvice blog',
            description: 'A blog site to get input from audience',
            code: 'test',
            url: '',
            git: ''
        },
        {
            image: 'password.png',
            alt: 'password generator',
            title: 'password generator',
            description: 'An app to generate random password',
            code: 'test',
            url: '',
            git: ''
        },
        {
            image: 'weather.png',
            alt: 'Weather Vane',
            title: 'weather dashboard',
            description: 'An app to view the current and 5 day weather forecast based on the city entered by user',
            code: 'test',
            url: '',
            git: ''
        },
        {
            image: 'todo_color_variation.png',
            alt: 'notetaker app',
            title: 'notetaker app',
            description: 'An app to keep track of to-do list',
            code: 'test',
            url: '',
            git: ''
        },
        {
            image: 'javascript-quiz.png',
            alt: 'quiz',
            title: 'javascript quiz',
            description: 'An online multiple choice quiz app',
            code: 'test',
            url: '',
            git: ''
        },
        {
            image: 'group-project-1.png',
            alt: 'recipe app',
            title: 'recipe app',
            description: 'An recipe app that allows users to search based on ingredients or category',
            code: 'test',
            url: '',
            git: ''
        }
    ])
    return (
       <section>
        <h1 className="title">Portfolio</h1>
                {projects.map((project, i) =>
                    <div className="flex-row" key={i}>
                        <img src={require(`../../assets/images/${project.image}`).default} alt={project.alt} />
                        <div className="content">
                            <h3>{project.title}</h3>
                            <p>{project.description}<br /><span>{project.code}</span></p>
                            <a href={project.url} target="_blank" rel="noreferrer">View Site</a>
                            <a href={project.git} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={["fab", "github"]} size="1x" color="#ffffff" />
                            </a>

                        </div>
                    </div>
                )}
            
        </section>   
    )
}

export default Portfolio;