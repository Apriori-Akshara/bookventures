import React from 'react'
import styles from '../../../../styles/homecomponents/lower/video.module.css'
// import Video1 from '/homepage/low/video (1).mp4'
// import Video2 from '/homepage/low/video (1).mp4'
// import Video3 from '/homepage/low/video (1).mp4'

const video = () => {
  return (
    <div className={styles.container}>
    <div className={styles.top}>
      <h1 className={styles.title}>Video of our Subscribers</h1>
      <p className={styles.text}>Our Subscribers telling the benefits of reading of reading and how the activities <b>Bookventures</b> have helped their intellectual</p>
    </div>
    <div className={styles.videos}>
      <div className={styles.videocont}>
        <video className={styles.video} src={'homepage/low/video (1).mp4'} width='400' height='300' controls/>
      </div>
      <div className={styles.videocont}>
        <video className={styles.video} src={'homepage/low/video (2).mp4'} width='400' height='300' controls/>
      </div>
      <div className={styles.videocont}>
        <video className={styles.video} src={'homepage/low/video (3).mp4'} width='400' height='300' controls/>
      </div>
    </div>

    </div>
  )
}

export default video