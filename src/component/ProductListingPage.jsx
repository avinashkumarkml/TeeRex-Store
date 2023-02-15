import React from "react";
import { useEffect, useState } from "react";
import styles from "./ProductListingPage.module.css";
import Card from "./Card/Card";
const ProductListingPage = () => {
  const [userData, setUserData] = useState([]);

  const fetchUsers = async () => {
    try {
      let users = await fetch(
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
      );
      users = await users.json();

      setUserData(users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(userData);

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}> sidebar</div>
      <div className={styles.cardLists}>
        {userData.map((data,index)=>{
          return (
            <Card key={index} />
          )
        })}
        
      </div>
    </div>
  );
};

export default ProductListingPage;
