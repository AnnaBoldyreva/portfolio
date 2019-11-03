import React from 'react';
import styles from  './Greeting.module.css';

function Greeting() {
  return (
    <div className={styles.greeting}>
      <div className={styles.container}>
        <div className={styles.greetingText}>
          <span>Hello,</span>
          <span>I am Anna <span>Boldyreva</span></span>
          <span><h1>Front-end developer </h1></span>
        </div>
        <div className={styles.profilePhoto}>
          <div className={styles.image}>
            <img src='https://sun9-54.userapi.com/c855620/v855620556/14d1e5/xBK4LzNybE4.jpg'   alt=""/>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Greeting;
