import React from 'react'
import styles from '../../../styles/homecomponents/books.module.css'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from "next/dynamic";

const bookssection = ({data}) => {

 let fiction = data.filter(data => data.attributes.isfiction === true && data.attributes.iskids === false);
 let nonfiction = data.filter(data => data.attributes.isfiction === false && data.attributes.iskids === false);

  return (
    <div className={styles.container}>
    {/* <div className={styles.topcontainer}>
      <div className={styles.topic}>Join a community</div>
      <hr className={styles.hr}/>
      <button className={styles.button}>Check what we do at our bookclubs!</button>
    </div> */}

      <div className={styles.bvsection}>

    <h1 className={styles.title}>Fiction</h1>
  
  <div className={styles.bvcontainer}>
  {fiction.map(data =>
      <div key={data.id} className={styles.bvcard}>
      <Link className={styles.link} href={`/Authorbooks/${data.id}`} >
        <div className={styles.bvimgcont}>
          <Image loader={() => data.attributes.img.data.attributes.url} src={data.attributes.img.data.attributes.url} width={400} height={400} unoptimized={true} alt="Book Image" />
        </div>
        <div className={styles.bvcardinfo}>
          <h2>{data.attributes.name}</h2>
          <h4>Genre - {data.attributes.genre}</h4>
        </div>
        </Link>
      </div>)}
      </div>

  
      <h1 className={styles.title}>Non-Fiction</h1>
  
      <div className={styles.bvcontainer}>
      {nonfiction.map(data =>
      <div key={data.id} className={styles.bvcard}>
      <Link className={styles.link} href={`/Authorbooks/${data.id}`} >
        <div className={styles.bvimgcont}>
        <Image loader={() => data.attributes.img.data.attributes.url} src={data.attributes.img.data.attributes.url} width={400} height={400} unoptimized={true} alt="Book Image" />
        </div>
        <div className={styles.bvcardinfo}>
          <h2>{data.attributes.name}</h2>
          <h4>Genre - {data.attributes.genre}</h4>
        </div>
        </Link>
      </div>)}
      </div>
    
  </div>
  </div>
  )
}

export default dynamic (() => Promise.resolve(bookssection), {ssr: false})