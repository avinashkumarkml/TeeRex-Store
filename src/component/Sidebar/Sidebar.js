import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.colour}>
        <h5>Colour</h5>
        <input type="checkbox" id="red" />
        <label htmlFor="red">Red</label>
        <br />
        <input type="checkbox" id="blue" />
        <label htmlFor="blue">Blue</label>
        <br />
        <input type="checkbox" id="green" />
        <label htmlFor="green">Green</label>
      </div>
      <div className={styles.gender}>
        <h5>Gender</h5>
        <input type="checkbox" id="men" />
        <label htmlFor="men">Men</label>
        <br />
        <input type="checkbox" id="women" />
        <label htmlFor="women">Women</label>
        <br />
      </div>
      <div className={styles.price}>
        <h5>Price</h5>
        <input type="checkbox" id="0-250" />
        <label htmlFor="0-250">0-Rs250</label>
        <br />
        <input type="checkbox" id="251-450" />
        <label htmlFor="251-450">Rs251-450</label>
        <br />
        <input type="checkbox" id="450" />
        <label htmlFor="450">Rs450</label>
      </div>

      <div className={styles.price}>
        <h5>Type</h5>
        <input type="checkbox" id="0-250" />
        <label htmlFor="0-250">Polo</label>
        <br />
        <input type="checkbox" id="251-450" />
        <label htmlFor="251-450">Hoodie</label>
        <br />
        <input type="checkbox" id="450" />
        <label htmlFor="450">Basic</label>
      </div>
    </div>
  );
};

export default Sidebar;
