import React, { useEffect, useState } from 'react'
import styles from '../../../styles/teststyles/test.module.css'
import Link from 'next/link'
import Image from 'next/image'
import {FaBars} from 'react-icons/fa'

const navbar = () => {

  const [click,setClick] = useState(true);
  const [colorChange, setColorchange] = useState(true);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > lastScrollY && window.scrollY >= 80) { // if scroll down hide the navbar
        setShow(false); 
      } else { // if scroll up show the navbar
        setShow(true);  
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY); 
    }
  };

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
        setColorchange(false);
    } else {
        setColorchange(true);
    }
};


  useEffect(() => {   
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      window.addEventListener('scroll', changeNavbarColor);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
        window.removeEventListener('scroll', changeNavbarColor);
      };
    }  

  }, [lastScrollY]);

  const clicked = () => {
    setClick(!click);
  }  

  return (
    <div className={`${show ? styles.fixed : styles.none}`}>
    <div className={`${colorChange ?  styles.container : styles.dark}`}>
    <div className={styles.logo}><div><Image className={styles.logoimg} src={'/bvlogo.png'} width={200} height={200}/></div></div>
    <div className={click ? `${styles.left} ${styles.list}` : `${styles.right} ${styles.list}`}>
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
      <div className={styles.menu}><button onClick={clicked}><FaBars /></button></div>
    </div>

    </div>
  )
}

export default navbar