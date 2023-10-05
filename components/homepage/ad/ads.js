import React from 'react'
import Image from 'next/image'
import styles from '../../../styles/ads/ads.module.css'

const ads = () => {
  return (
    <div className={styles.container}>
     <Image className={styles.adimg} src={"/ads/ad.png"} width={1000} height={300} alt="sidead" />
    </div>
  )
}

export default ads