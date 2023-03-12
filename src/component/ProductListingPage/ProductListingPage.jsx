import React from "react";
import { useEffect, useState } from "react";
import styles from "./ProductListingPage.module.css";
import Card from "../Card/Card";
import Sidebar from "../Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
const ProductListingPage = () => {
  const [userData, setUserData] = useState([]);
  const [filterData, setFilterData]=useState([]);
  const {color, gender, price, type} = useSelector((store) => store);

  console.log(userData)
  const filterUserData=()=>{
    
    let filteredData= userData.filter(user=>color?.includes(user?.color?.toLowerCase()))
    setFilterData(filteredData)
   }
   

  useEffect(()=>{
    filterUserData()
  },[color, filterData])

  
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


  return (
    <div className={styles.container}>
      <div className={styles.sidebar}> 
      <Sidebar/>
      </div>
      <div className={styles.cardLists}>
        {filterData.length !== 0 ?  filterData.map((data, index) => {
          return <Card data={data} key={index} />;
        }) :
        userData.map((data, index) => {
          return <Card data={data} key={index} />;
        })
      }
      </div>
    </div>
  );
};

export default ProductListingPage;
