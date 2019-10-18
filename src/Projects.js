import React from 'react';
import styles from  './Projects.module.css';
import Project from "./Project";

function Projects(props) {
  let projectElement = props.project.map(pr => <Project name={pr.name} description={pr.description} logo={pr.logo} button={pr.button} />);
  return (
    <div className={styles.projects}>
      <div className={styles.container}>
        {projectElement}
      </div>

    </div>
  );
}

export default Projects;
