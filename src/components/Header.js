import React from "react";
import styles from "./Header.module.css";

const Header = () => (
  <header style={{ paddingTop: '2rem' }}>
    <h1 className={styles["logo"]}>
      <span className={styles["my"]}>Mi</span>
      <span className={styles["therapy"]}>Terapia</span>
      <span className={styles["online"]}>Online</span>
    </h1>
  </header>
);

export default Header;
