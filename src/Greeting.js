import React from 'react';
import styles from  './Greeting.module.css';

function Greeting() {
  return (
    <div className={styles.greeting}>
      <div className={styles.container}>
        <div className={styles.greetingText}>
          <span>Hello</span>
          <span>I am Anna</span>
          <span>Front-end developer(ReactJS) </span>
        </div>
        <div className={styles.profilePhoto}>
          <img src="" alt=""/>
        </div>

      </div>

    </div>
  );
}

export default Greeting;
