import React from 'react'
import styles from '../../../styles/homecomponents/reading.module.css'
import Image from 'next/image'

const reading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Why is Reading so Important?</div>
      <hr/>
      <div className={styles.first}>
        <div>
          <Image className={styles.img} src={'/homepage/reading/1.jpeg'} width={500} height={400} alt="image"/>
        </div>
        <div className={styles.info}>
          <h3>LITERARY CIRCLE</h3>
          <p>Bring your ideas and find a community that cares <br /><br />
             <b>IBC</b> Bookventures brings a revolutionary change in book club meetings with a virtual setup to connect and greet people around the world.So, if you are looking for a book club to join but are too lazy or shy to go out, join a virtual connecting space. The book club is open for all kinds of book lovers, young, old, avid readers, and first-timers.  <br /><br />
             <b>"Great stories are made with new people."</b></p>
          <button>Learn More</button>
        </div>
      </div>
      <div className={styles.sec}>
        <div>
          <Image className={styles.img} src={'/homepage/reading/1.jpg'} width={500} height={400} alt="image"/>
        </div>
        <div className={styles.info}>
          <h3>LITERARY CIRCLE</h3>
          <p>Discover new avenues for exploration<br /><br />
             <b>IBC</b> Bookventures fosters an environment assisting self-growth and community awareness. Our elite book communities have an application process that helps us gauge the compatibility of the group with each individual to ensure a positive experience for the entire community.  <br /><br />
             <b>"Great stories are made with new people."</b></p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default reading