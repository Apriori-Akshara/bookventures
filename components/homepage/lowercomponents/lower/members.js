import React from 'react'
import styles from '../../../../styles/homecomponents/lower/members.module.css'
import Image from 'next/image'

const members = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>What our Members have to say about us</h1>
      {/* <hr className={styles.hr} /> */}
      <div className={styles.info}>Overall rating <b>5/5 averaged</b> <br />
        on rating of 3 people</div>
        <div className={styles.position}>
          <Image className={styles.img} src={'/homepage/low/books.jpg'} width={1000} height={800} alt='image'/>
          <div className={styles.profiles}>
            <div className={styles.card}>
              <Image className={styles.profileimg} src={'/homepage/low/profile (1).jpeg'} width={300} height={300} alt='image'/>
              <div className={styles.review}>"amazing club. if thee enjoys book and want to discuss with others. i..."</div>
              {/* <div className={styles.fullreview}>Read full review...</div> */}
              <div className={styles.name}>Sushma Yadav</div>
            </div>
            <div className={styles.card}>
              <Image className={styles.profileimg} src={'/homepage/low/profile (2).jpeg'} width={300} height={300} alt='image'/>
              <div className={styles.review}>"amazing club. if thee enjoys book and want to discuss with others. i..."</div>
              {/* <div className={styles.fullreview}>Read full review...</div> */}
              <div className={styles.name}>Jaspreet Singh</div>
            </div>
            <div className={styles.card}>
              <Image className={styles.profileimg} src={'/homepage/low/profile (3).jpeg'} width={300} height={300} alt='image'/>
              <div className={styles.review}>"amazing club. if thee enjoys book and want to discuss with others. i..."</div>
              {/* <div className={styles.fullreview}>Read full review...</div> */}
              <div className={styles.name}>Shrishti Sharma</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default members