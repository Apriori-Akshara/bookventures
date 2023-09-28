import React from 'react'
import Image from 'next/image'
import styles from '../../styles/homecomponents/hero.module.css'

const herosection = () => {
  return (
    <div>
      <div className={styles.container}>
        <Image className={styles.heroimage} src={'/homepage/heroimage/hero.jpeg'} width={1000} height={800} alt="image"/>
        <div className={styles.box}>
          <h2>India's Largest Most Elite <br /> Virtual Book Club!</h2>
          <h5>where tomorrow's leaders can</h5>
          <h4>READ | MEET | SHARE | NARRATE</h4>
          <button>Join Now</button>
        </div>
      </div>
      <div className={styles.box2}>
        <h2>India's Largest Most Elite <br /> Virtual Book Club!</h2>
        <h5>where tomorrow's leaders can</h5>
        <h4>READ | MEET | SHARE | NARRATE</h4>
        <button>Join Now</button>
      </div>
    </div>

  )
}

export default herosection