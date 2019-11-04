import React from 'react';
import styles from  './Skills.module.css';
import Skill from "./Skill";

function Skills(props) {
    let skillElement = props.skill.map(sk => <Skill name={sk.name} description={sk.description} logo={sk.logo} />);
  return (
    <div className={styles.skills}>
      <div className={styles.container}>

          <div className={styles.blockTitle}>
          <div className={styles.headerTitle}>
              <h2 className={styles.headerTitle}>My Skills</h2>
              <div className={styles.line}>
          </div>
          </div>
          </div>

          {skillElement}
      </div>

    </div>
  );
}

export default Skills;
