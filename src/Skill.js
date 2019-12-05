import React from 'react';
import styles from './Skill.module.css'

function Skill(props) {
  return (
   <div className={styles.firstSkill}>
       <div className={styles.skill}>
           <div className={styles.logo}>
       <img src={props.logo} alt={'logo'}/>
           </div>
          <span>{props.name}</span>
          <span>{props.description}</span>
       </div>
   </div>


  );
}

export default Skill;
