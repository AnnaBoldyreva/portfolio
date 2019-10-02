import React from 'react';
import styles from  './Projects.module.css';

function Projects() {
  return (
    <div className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.firstProject}>
          <img className={styles.imgProject} src="https://miro.medium.com/max/3118/1*iwPLQjyFYRTVeQ2cb4S9rA.png" alt="coding"/>
          <span>Name of Project</span>
          <span>Description</span>
          <button className={styles.viewButton}>View</button>

        </div>
        <div className={styles.secondProject}>
          <img className={styles.imgProject} src="https://marketingweek.imgix.net/content/uploads/2017/05/12103909/Coding-body-image-.jpg?auto=compress,format&q=60&w=750&h=460" alt="coding"/>
          <span>Name of Project</span>
          <span>Description</span>
          <button className={styles.viewButton}>View</button>
        </div>

      </div>

    </div>
  );
}

export default Projects;
