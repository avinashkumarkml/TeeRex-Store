import React from "react";
import styles from "./Sidebar.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  updatecolor,
  updategender,
  updateprice,
  updatetype,
} from "../../redux/action";
const Sidebar = () => {
  const state = useSelector((store) => store);
  const dispatch = useDispatch();

  console.log("state", state);

  const handleColor = (color) => {
    dispatch(updatecolor(color));
  };

  const handleGender = (gender) => {
    dispatch(updategender(gender));
  };

  const handleType = (type) => {
    dispatch(updatetype(type));
  };

  const handlePrice = (price) => {
    dispatch(updateprice(price));
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.colour}>
        <h5>Colour</h5>
        <input
          type="checkbox"
          id="red"
          onClick={(e) => {
            handleColor("red");
          }}
        />
        <label htmlFor="red">Red</label>
        <br />
        <input type="checkbox" id="blue" onClick={(e) => handleColor("blue")} />
        <label htmlFor="blue">Blue</label>
        <br />
        <input
          type="checkbox"
          id="green"
          onClick={(e) => handleColor("green")}
        />
        <label htmlFor="green">Green</label>
        <br />
        <input type="checkbox" id="grey" onClick={(e) => handleColor("grey")} />
        <label htmlFor="grey">Grey</label>
        <br />
        <input
          type="checkbox"
          id="white"
          onClick={(e) => handleColor("white")}
        />
        <label htmlFor="white">White</label>
        <br />

        <input
          type="checkbox"
          id="black"
          onClick={(e) => handleColor("black")}
        />
        <label htmlFor="black">Black</label>
        <br />
        <input type="checkbox" id="pink" onClick={(e) => handleColor("pink")} />
        <label htmlFor="pink">Pink</label>
        <br />
        <input
          type="checkbox"
          id="purple"
          onClick={(e) => handleColor("purple")}
        />
        <label htmlFor="purple">Purple</label>
        <br />
      </div>
      <div className={styles.gender}>
        <h5>Gender</h5>
        <input type="checkbox" id="men" onClick={(e) => handleGender("men")} />
        <label htmlFor="men">Men</label>
        <br />
        <input
          type="checkbox"
          id="women"
          onClick={(e) => handleGender("women")}
        />
        <label htmlFor="women">Women</label>
        <br />
      </div>
      <div className={styles.price}>
        <h5>Price</h5>
        <input type="checkbox" id="0-250" onClick={(e) => handlePrice("250")} />
        <label htmlFor="0-250">0-Rs250</label>
        <br />
        <input
          type="checkbox"
          id="251-450"
          onClick={(e) => handlePrice("251-450")}
        />
        <label htmlFor="251-450">Rs251-450</label>
        <br />
        <input type="checkbox" id="450" onClick={(e) => handlePrice("450")} />
        <label htmlFor="450">Rs450</label>
      </div>

      <div className={styles.price}>
        <h5>Type</h5>
        <input type="checkbox" id="polo" onClick={(e) => handleType("Polo")} />
        <label htmlFor="polo">Polo</label>
        <br />
        <input
          type="checkbox"
          id="hoodie"
          onClick={(e) => handleType("hoodie")}
        />
        <label htmlFor="hoodie">Hoodie</label>
        <br />
        <input
          type="checkbox"
          id="basic"
          onClick={(e) => handleType("Basic")}
        />
        <label htmlFor="basic">Basic</label>
      </div>
    </div>
  );
};

export default Sidebar;
