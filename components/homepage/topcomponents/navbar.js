import React from 'react'
import styles from '../../../styles/topcomponents/nav.module.css'
import Link from 'next/link'

const navbar = (props) => {

  return (
    <div className={props.click ? `${styles.left} ${styles.container}` : `${styles.right} ${styles.container}`}>
      <ul>
        <Link className={styles.link} href='/'>Home</Link>
        <Link className={styles.link} href='/Bookventureskids'>Bookventures KIds</Link>
        <li>Quizzes</li>
        <Link className={styles.link} href='/Community'>Join a Community</Link>
        <li>Book Search</li>
        <li>Events</li>
        <Link className={styles.link} href='/ContactUs'>Contact Us</Link>
        <li>About Us</li>
      </ul>
    </div>
  )
}

export default navbar