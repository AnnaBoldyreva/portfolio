import React from 'react';
import styles from './Project.module.css'

function Project(props) {
  return (

     <div className={styles.project}>

          <img  src={props.logo} alt="coding"/>
          <span>{props.name}</span>
          <span>{props.description}</span>
          <button>{props.button}</button>

     </div>





  );
}

export default Project;
