import React from 'react'
import styles from '../../../styles/teststyles/hero.module.css'
import Slider from '../../homepage/middlecomponents/bookslider/bookclubslider'

const hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftcontainer}>
        <div className={styles.largetext}>India's Largest<br/> Virtual Book Club!</div>
        <div className={styles.smalltext}>READ | MEET | SHARE | NARRATE</div>
        <button className={styles.btn}>Join Now</button>
      </div>
      <div className={styles.rightcontainer}>
      <div className={styles.title}>Join a Book Club!</div>
        <Slider />
      </div>
    </div>
  )
}

export default hero