import React from 'react';
import styles from  './Navigation.module.css';

function Navigation() {
  return (

      <div className={styles.nav}>
        <a href="#" className={styles.link}>Main page</a>
        <a href="#" className={styles.link}>Skills</a>
        <a href="#" className={styles.link}>Projects</a>
        <a href="#" className={styles.link}>Contacts</a>
      </div>

  );
}

export default Navigation;
