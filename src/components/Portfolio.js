import React from 'react';
import Project from './Project';

function Portfolio() {
  const projects = [
    { id: 1, title: 'Weather Dashboard', image: '../images/weather-dashboard.png', deployedLink: 'https://viren15152.github.io/06-Weather-Dashboard-Server-Side-APIs-Viren/', githubLink: 'https://github.com/viren15152/06-Weather-Dashboard-Server-Side-APIs-Viren' },
    { id: 2, title: 'CMS Tech Blog', image: '../images/cms-tech-blog.png', deployedLink: 'https://secure-journey-14586-f3f5cbbb08df.herokuapp.com/login', githubLink: 'https://github.com/viren15152/Model-View-Controller-CMS-Tech-Blog' },
    { id: 3, title: 'Advanced-CSS-Portfolio', image: '../images/advanced-css-portfolio.png', deployedLink: 'https://viren15152.github.io/Advanced-CSS-Portfolio/', githubLink: 'https://github.com/viren15152/Advanced-CSS-Portfolio' },
    { id: 4, title: 'Web API Coding Quiz', image: '../images/web-api-coding-quiz.png', deployedLink: 'https://viren15152.github.io/Web-APIs-Coding-Quiz/', githubLink: 'https://github.com/viren15152/Web-APIs-Coding-Quiz' },
    { id: 5, title: 'PWA Text Editor', image: '../images/pwa-text-editor.png', deployedLink: 'https://progressive-web-applications-pwa-text-w3iw.onrender.com/', githubLink: 'https://github.com/viren15152/Progressive-Web-Applications-PWA-Text-Editor' },
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map(project => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
