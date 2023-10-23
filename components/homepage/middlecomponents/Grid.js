import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {BiSolidLeftArrowSquare,BiSolidRightArrowSquare} from 'react-icons/bi'
import styles from "../../../styles/homecomponents/community.module.css";

const Grid = ({data}) => {
  const[count,setCount] = useState(0);
  const[count2,setCount2] = useState(6);

  function increment(){
    scrollto()
    setCount(count+6);
    setCount2(count2+6)
  }

  function decrement(){
    scrollto()
    setCount(count-6);
    setCount2(count2-6)

  }

  const scrollto = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };

  return (
    <div>
    <div  className={styles.bvcontainer}>
            {data.slice(count,count2).map((data) => (
              <div className={styles.bvcard} key={data.id}>
              <Link className={styles.link} href={`/Authorbooks/${data.id}`} >
                <div className={styles.bvimgcont}>
                <Image loader={() => data.attributes.img.data.attributes.url} src={data.attributes.img.data.attributes.url} width={400} height={400} alt="Book Image" />
                </div>
                <div className={styles.bvcardinfo}>
                  <h2>{data.attributes.name}</h2>
                  <h4>Genre - {data.attributes.genre}</h4>
                </div>
                </Link>
              </div>
            ))}
    </div>

            <div className={styles.buttons}>
            <button disabled={count ? false : true }><BiSolidLeftArrowSquare className={!count ? `${styles.leftbtn} ${styles.active}` : `${styles.leftbtn}`} onClick={decrement}/></button>
            <button disabled={count2 > data.length ? true : false }><BiSolidRightArrowSquare className={count2 > data.length ? `${styles.leftbtn} ${styles.active}` : `${styles.leftbtn}`} onClick={increment}/></button>
          </div>
    </div>
  )
}

export default Grid