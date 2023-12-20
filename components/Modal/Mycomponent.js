import React, { useState } from 'react'
import styles from '../../styles/Modal/modal.module.css'
import Formui from './Formui'
import { BiArrowBack } from "react-icons/bi";
import Bmember from './Become'

export default function Mycomponent({ onClose }) {

  const[member,setMember] = useState(true)
  const[form,setForm] = useState(false)
  const[become,setBecome] = useState(false)
  const[icon,setIcon] = useState(false)

  function members(){
    setMember(false)
    setForm(true)
    setIcon(true)
  }

  function goback(){
    setMember(true)
    setForm(false)
    setIcon(false)
    setBecome(false)
  }

  function becomes(){
    setMember(false)
    setBecome(true)
    setIcon(true)
  }

  return (
    <div className={styles.wcontainer}>    
      <div className={styles.innercontainer}>
        <button className={styles.closebtn} onClick={onClose}>X</button>
        <div className={styles.form}>
        <div className={styles.heading}>
          {icon && <BiArrowBack className={styles.icon} onClick={goback}/>}
          <div className={styles.header}>Create Your Own BookClub!</div>
        </div>
          {member && <div className={styles.flexit}>
            <button className={styles.aam} onClick={members}>Already a Member</button>
            <button className={styles.bam} onClick={becomes}>Become a Member</button>
          </div>}
          {form && <Formui /> }
          {become && <Bmember />}
          <div className={styles.offer}>
            <div className={styles.red}>
              LIMITED TIME OFFER!
            </div>
            <div className={styles.flexoffers}><div className={styles.offers}>Monthly Membership Offer - </div><s className={styles.red2}>900</s> 800 INR</div>
            <div className={styles.flexoffers}><div className={styles.offers}>Quaterly Membership Offer - </div><s className={styles.red2}>2400</s> 1800 INR</div>
            <div className={styles.flexoffers}><div className={styles.offers}>UPI Number for Payments - </div>9717189650</div>
          </div>
        </div>

      </div>

    </div>
  )
}
