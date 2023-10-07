import React from 'react'
import styles from '../../../../styles/homecomponents/lower/contact.module.css'
import Image from 'next/image'

const contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Contact Us
      </div>
      <div className={styles.con}>
        <div className={styles.left}>
          <h4>Better yet, see us in person!</h4>
          <p>We love our book club members, so feel free to visit during normal business hours.</p>
          <button>Message Us on WhatsApp</button>
          <h4>The Indian Book Club</h4>
          <p>Delhi, India</p>
          <p>Open today 09:00 am - 05:00 pm</p>
          <button>Write to Us</button>
        </div>
        <div>
          <Image className={styles.img} src={'/homepage/low/book.jpg'} width={400} height={400} alt='image'/>
        </div>
      </div>
    </div>
  )
}

export default contact