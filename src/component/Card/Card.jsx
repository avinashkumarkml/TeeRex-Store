import React from 'react'
import styles from "./Card.module.css"
const Card = () => {
  return (
    <div className={styles.card}>
    <div className={styles.top}>
      <img src="https://images.unsplash.com/photo-1676407591026-824246b4a102?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60" alt="" />
      <span className={styles.name}>Black Polo</span>
    </div>
    <div className={styles.bottom}>
      <div>
        Rs: 300
      </div>
      <div>
        <button>ADD TO CART</button>
      </div>
    </div>
</div>
  )
}

export default Card