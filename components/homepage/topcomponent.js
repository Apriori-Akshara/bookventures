import React, { useState } from 'react'
import Top from './topcomponents/top'
import Navbar from './topcomponents/navbar'
import styles from '../../styles/topcomponents/logo.module.css'
import {FaBars} from 'react-icons/fa'

const Topcomponent = () => {

  const [click,setClick] = useState(true);

  const clicked = () => {
    setClick(!click);
  }

  return (
    <div className={styles.fixed}>
      <Top />
      <div className={styles.container}> 
        <div className={styles.logo}>Bookventures</div>
        <div className={styles.menu}><button onClick={clicked}><FaBars /></button></div>
      </div>
      <Navbar click={click}/>
    </div>
  )
}

export default Topcomponent