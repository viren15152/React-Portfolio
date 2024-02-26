import React from 'react';

function Project({ project }) {
  return (
    <div className="project">
      <img src={`../images/${project.image}`} alt={project.title} />
      <div className="project-details">
        <h3>{project.title}</h3>
        <div className="project-links">
          <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">View Deployed</a>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">View Source</a>
        </div>
      </div>
    </div>
  );
}

export default Project;
