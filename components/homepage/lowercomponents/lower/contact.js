import React from 'react'
import styles from '../../../../styles/homecomponents/lower/contact.module.css'
import Image from 'next/image'
import {BsWhatsapp} from 'react-icons/bs'

const contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Contact Us
      </h1>
      <div className={styles.con}>
        <div className={styles.left}>
          <h4>Message us on WhatsApp</h4>
          {/* <p>We love our book club members, so feel free to visit during normal business hours.</p> */}
          <a className={styles.linked} href="https://wa.me/9717189138?text=welcome" title="Share on whatsapp"><button>WhatsApp<BsWhatsapp /></button></a>
          <h4>Bookventures</h4>
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