import React from 'react'
import styles from '../../../styles/topcomponents/top.module.css'

const top = () => {
  return (
    <div className={styles.container}>
      <div>Introductory Offer - Save 750 INR<br className={styles.break}/><span className={styles.and}> &</span> Get 3 months membership at 1500 INR</div>
    </div>
  )
}

export default top