import React from 'react';
import styles from  './Contact.module.css';

function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.contactInfo}>
          <span>Contact</span>
          <input  type="text" name="name" placeholder="Name"/>
          <input  type="text" name="email" placeholder="Email"/>
          <textarea  placeholder='Your message'>
          </textarea>
          <button type='submit'>Send</button>


        </div>

      </div>

    </div>
  );
}

export default Contact;
