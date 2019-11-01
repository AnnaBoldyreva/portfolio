import React from 'react';
import styles from  './Footer.module.css';
import LinksFooter from "./LinksFooter";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
          <span className={styles.blockTitle}>Anna Boldyreva</span>
        <LinksFooter/>
        <div className={styles.copyright}>
          <span>© 2019, All Rights Reserved.</span>
        </div>
      </div>


    </div>
  );
}

export default Footer;
