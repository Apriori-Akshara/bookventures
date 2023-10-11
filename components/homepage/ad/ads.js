import React from 'react'
import Image from 'next/image'
import styles from '../../../styles/ads/ads.module.css'

const ads = () => {
  return (
    <div className={styles.container}>
     <Image className={styles.adimg} src={"/ads/ad.png"} width={1500} height={500} alt="sidead" />
     <Image className={styles.adimg1} src={"/ads/ad3.jpg"} width={1500} height={500} alt="sidead" />
    </div>
  )
}

export default ads