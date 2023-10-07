import React from 'react'
import styles from '../../../../styles/homecomponents/lower/newsletter.module.css'

const newsletter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Subscribe to our Newsletter</div>
      <div className={styles.input}>
        <input placeholder='Email...'/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default newsletter