import React from 'react';
import styles from  './Contact.module.css';

function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.container}>


          <div className={styles.blockTitle}>
            <div className={styles.headerTitle}>
              <h2 className={styles.headerTitle}>My Skills</h2>
              <div className={styles.line}>
              </div>
            </div>
          </div>
          {/*<div className={styles.blockTitle}><h1>Contact</h1></div>*/}
        <form className={styles.formWrapper}>
          <input className={styles.formArea}  type="text" name="name" placeholder="Name"/>
          <input className={styles.formArea} type="text" name="email" placeholder="Email"/>
          <textarea className={styles.messageArea} placeholder='Your message'>
          </textarea>
          <button className={styles.btnSubmit} type='submit'>Send</button>
        </form>




      </div>

    </div>
  );
}

export default Contact;
