import React from 'react';
import styles from  './Header.module.css';
import Navigation from "./Navigation";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
      <Navigation/>
      </div>
    </div>
  );
}

export default Header;
