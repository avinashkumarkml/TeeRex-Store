import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <span>TeeRax Store</span>
      <span>Products</span>
      <span>TeeRax Store</span>
    </div>
  );
};

export default Navbar;
