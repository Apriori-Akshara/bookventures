import React from 'react'
import styles from '../../../styles/teststyles/test.module.css'
import Link from 'next/link'
import Image from 'next/image'

const navbar = () => {

  

  return (
    <div className={styles.container}>
    <div className={styles.logo}><div><Image className={styles.logoimg} src={'/bvlogo.png'} width={200} height={200}/></div></div>
      <ul>
        <Link className={styles.link} href='/'>Home</Link>
        <Link className={styles.link} href='/Bookventureskids'>Bookventures Kids</Link>
        <li>Quizzes</li>
        <Link className={styles.link} href='/Bookclub'>Bookclubs</Link>
        <Link className={styles.link} href='/Community'>Join a Community</Link>
        <Link className={styles.link} href='/Booksearch'>Book Search</Link>
        <li>Events</li>
        <Link className={styles.link} href='/ContactUs'>Contact Us</Link>
        <li>About Us</li>
      </ul>
    </div>
  )
}

export default navbar