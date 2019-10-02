import React from 'react';
import styles from  './Skills.module.css';

function Skills() {
  return (
    <div className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.firstSkill}>
          <img className={styles.imgLogo} src="https://www.advicesexpress.ru/img/products/11092-vnesu-popravki-na-vashem-sajte-html-css.jpg" alt="htmlcss"/>
          <span>HTML& CSS</span>
          <span>Detailed description of skill</span>

        </div>
        <div className={styles.secondSkill}>
            <img className={styles.imgLogo} src="https://itproger.com/img/courses/1476977754.jpg" alt="jslogo"/>
            <span>JS</span>
            <span>Detailed description of skill</span>


        </div>
        <div className={styles.thirdSkill}>

            <img  className={styles.imgLogo} src="https://ionicframework.com/blog/wp-content/uploads/2019/02/react-beta.png" alt="jslogo"/>
            <span>React</span>
            <span>Detailed description of skill</span>

        </div>

      </div>

    </div>
  );
}

export default Skills;
