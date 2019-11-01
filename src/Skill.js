import React from 'react';
import styles from './Skill.module.css'

function Skill(props) {
  return (
   <div className={styles.firstSkill}>
       <div className={styles.skill}>
       <img src={props.logo} alt={'logo'}/>
          <span>{props.name}</span>
          <span>{props.description}</span>
       </div>
   </div>


  );
}

export default Skill;
