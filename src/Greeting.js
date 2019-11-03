import React from 'react';
import styles from  './Greeting.module.css';

function Greeting() {
  return (
    <div className={styles.greeting}>
      <div className={styles.container}>
        <div className={styles.greetingText}>
          <span>Hello,</span>
          <span>I am <span>Anna Boldyreva</span></span>
          <span><h1>Front-end developer </h1></span>
        </div>
        <div className={styles.profilePhoto}>
          <img src="" alt=""/>
        </div>

      </div>

    </div>
  );
}

export default Greeting;
