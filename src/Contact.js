import React from 'react';
import styles from  './Contact.module.css';

function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <span className={styles.blockTitle}>Contact</span>
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
