import React from 'react'
import styles from '../../../styles/topcomponents/nav.module.css'
import Link from 'next/link'

const navbar = (props) => {

  return (
    <div className={props.click ? `${styles.left} ${styles.container}` : `${styles.right} ${styles.container}`}>
      <ul>
        <Link className={styles.link} href='/'>Home</Link>
        <Link className={styles.link} href='/Bookventureskids'>Bookventures Kids</Link>
        <li>Quizzes</li>
        <Link className={styles.link} href='/Bookclub'>Book Clubs</Link>
        <Link className={styles.link} href='/Community'>Join a Community</Link>
        <Link className={styles.link} href='/Booksearch'>Book Search</Link>
        <Link className={styles.link} href='/Events'>Events</Link>
        <Link className={styles.link} href='/ContactUs'>Contact Us</Link>
        <Link className={styles.link} href='/AboutUs'>About Us</Link>
      </ul>
    </div>
  )
}

export default navbar