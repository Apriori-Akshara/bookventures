import React from 'react'
import styles from '../../../../styles/homecomponents/lower/members.module.css'
import Image from 'next/image'
import Slider from './slider'

const members = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>What our Members have to say about us</h1>
      {/* <hr className={styles.hr} /> */}
      {/* <div className={styles.info}>Overall rating <b>5/5 averaged</b> <br />
        on rating of 3 people</div> */}
        <div className={styles.position}>
        <div className={styles.imgcont}>
          <Image className={styles.img} src={'/homepage/low/books.jpg'} width={1000} height={800} alt='image'/>
        </div>
          <div className={styles.profiles}>
            <Slider />
          </div>
        </div>
    </div>
  )
}

export default members