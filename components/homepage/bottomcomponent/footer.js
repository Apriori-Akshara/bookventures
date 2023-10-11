import React from 'react'
import styles from '../../../styles/homecomponents/lower/fotter.module.css'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsPinterest} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'

const footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}><b>Subscribe to Our Newsletter</b></div>
      <div className={styles.row}>
      <div className={`${styles.column} ${styles.columnend}`}>
          {/* <p><b>Subscribe to Our Newsletter</b></p> */}
          <p className={styles.text}><b>Join the Bookclubs newsletter for monthly reading recommendations, book club tips, giveaways, and more.</b></p><br/>
          <div className={styles.input}>
            <input placeholder='Email Address'/>
            <button><BsFillArrowRightCircleFill /></button>
          </div>
          <div className={styles.social}>
            <BsFacebook />
            <BsInstagram />
            <BsTwitter />
            <BsPinterest />
            <BsLinkedin />
            <BsYoutube />
          </div>
        </div>
        <div className={styles.column}>
          <p><b>Company</b></p>
          <p> About Bookclubs</p>
          <p> Privacy Policy</p>
        </div>
        <div className={styles.column}>
          <p><b>Community</b></p>
          <p> Join a Book Club</p>
          <p> Blog</p>
          <p> Forum</p>
          <p> Events</p>
        </div>
        <div className={styles.column}>
          <p><b>Support</b></p>
          <p> Discussion Questions</p>
          <p> Contact Us</p>
          <p> How To Guides</p>
          <p> FAQ</p>
        </div>
        <div className={styles.column}>
          <p><b>Bookclubs for...</b></p>
          <p> Business</p>
          <p> Charities</p>
          <p> Bookstores</p>
          <p> Libraries</p>
        </div>      
        <div>
      </div>
      </div>

    </div>
  )
}

export default footer