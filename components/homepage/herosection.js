import React from 'react'
import Image from 'next/image'
import styles from '../../styles/homecomponents/hero.module.css'

const herosection = () => {
  return (
    <div>
      <div className={styles.container}>
        <Image className={styles.heroimage} src={'/homepage/heroimage/heroimage.jpg'} width={3000} height={2400} alt="image"/>
        <div className={styles.box}>
          <h2>India's Largest Virtual <br className={styles.break}/>Book Club!</h2>
          {/* <h5>Readers Become Leaders</h5> */}
          <h4>READ | MEET | SHARE | NARRATE</h4>
          <button>Join Now</button>
        </div>
      </div>
      {/* <div className={styles.box2}>
        <h2>India's Largest Virtual Book Club!</h2>
        <h5>where tomorrow's leaders can</h5>
        <h4>READ | MEET | SHARE | NARRATE</h4>
        <button>Join Now</button>
      </div> */}
    </div>
  )
}

export default herosection;