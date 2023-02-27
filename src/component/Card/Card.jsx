import React from 'react'
import styles from "./Card.module.css"
const Card = ({data}) => {
  return (
    <div className={styles.card}>
    <div className={styles.top}>
      <img src={data.imageURL} alt="" />
      <span className={styles.name}>{data.name}</span>
    </div>
    <div className={styles.bottom}>
      <div>
        Rs: {data.price}
      </div>
      <div>
        <button>ADD TO CART</button>
      </div>
    </div>
</div>
  )
}

export default Card