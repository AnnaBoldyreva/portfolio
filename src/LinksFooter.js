import React from 'react';
import styles from  './LinksFooter.module.css';

function LinksFooter() {
  return (

      <div className={styles.links}>
        <a href="#" className={styles.link}>Linkedin</a>
        <a href="#" className={styles.link}>Guthub</a>
        <a href="#" className={styles.link}>Facebook</a>
      </div>

  );
}

export default LinksFooter;
