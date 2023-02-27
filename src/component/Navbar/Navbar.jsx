import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>TeeRax Store</div>
      <div className={styles.right}>
        <Link to="/">
      <span>Products</span>
        </Link>
        <Link to="/">
      <span className={styles.cart}><i class="fa-solid fa-cart-shopping"></i></span>
        </Link>
      </div>
        
    </div>
  );
};

export default Navbar;
