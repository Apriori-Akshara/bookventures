import React, { useState,useEffect } from 'react'
import Top from './topcomponents/top'
import Navbar from './topcomponents/navbar'
import styles from '../../styles/topcomponents/logo.module.css'
import {FaBars} from 'react-icons/fa'
import Image from 'next/image'

const Topcomponent = () => {

  const [click,setClick] = useState(true);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  console.log(window.scrollY)
  console.log(lastScrollY)

    const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY >= lastScrollY) { // if scroll down hide the navbar
        setShow(false); 
      } else { // if scroll up show the navbar
        setShow(true);  
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY); 
    }
  };

  useEffect(() => {   
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }  

  }, [lastScrollY]);

  const clicked = () => {
    setClick(!click);
  }

  return (
    <div className={`${show ? styles.fixed : styles.none}`}>
      <Top />
      <div className={styles.container}> 
        <div className={styles.logo}><div><Image className={styles.logoimg} src={'/bvlogo.png'} width={200} height={200}/></div>
        <div className={styles.text}>Readers Become Leaders</div>
        </div>
        <div className={styles.menu}><button onClick={clicked}><FaBars /></button></div>
      </div>
      <Navbar click={click}/>
    </div>
  )
}

export default Topcomponent