import React from 'react';
import styles from  './Projects.module.css';
import Project from "./Project";

function Projects(props) {
  let projectElement = props.project.map(pr => <Project name={pr.name} description={pr.description} logo={pr.logo} button={pr.button} />);
  return (
    <div className={styles.projects}>
      <div className={styles.container}>
          <div className={styles.blockTitle}>
              <div className={styles.headerTitle}>
                  <h2 className={styles.headerTitle}>My Projects</h2>
                  <div className={styles.line}>
                  </div>
              </div>
          </div>
          {/*<div className={styles.blockTitle}><h1>My Projects</h1></div>*/}
        {projectElement}
      </div>

    </div>
  );
}

export default Projects;
