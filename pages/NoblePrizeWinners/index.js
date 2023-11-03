import React from 'react'
import Topcomponent from '@/components/homepage/topcomponent'
import Footer from '@/components/homepage/bottomcomponent/footer'
import styles from '../../styles/homecomponents/community.module.css'
import Image from 'next/image';
import Link from 'next/link';
import dynamic from "next/dynamic";

export const getStaticProps = async () => {
  const resulting = await fetch(`${process.env.NEXT_PUBLIC_URL}/authors?populate=*`, {
    headers: {
     Authorization: "bearer "+process.env.NEXT_PUBLIC_TOKEN,
   } 
   });
  const result = await resulting.json();
  return {
    props: {
      data: result.data,
    },
  };
};

const index = ({data}) => {

  let winners = data.filter(data => data.attributes.isNobleWinner === true)

  return (
    <div>
      <Topcomponent />
      <div className={styles.container}>
      <div className={styles.topic}>Noble Prize Winners in Literature 2013-23</div>
      <hr className={styles.hr}/>
      <div className={styles.bvcontainer}>
            {winners.map((data) => (
              <div className={styles.bvcard} key={data.id}>
              <Link className={styles.link} href={`/Authorbooks/${data.id}`} >
                <div className={styles.bvimgcont}>
                <Image loader={() => data.attributes.img.data.attributes.url} unoptimized={true} src={data.attributes.img.data.attributes.url} width={400} height={400} alt="Book Image" />
                </div>
                <div className={styles.bvcardinfo}>
                  <h2>{data.attributes.name}</h2>
                  <h4>Genre - {data.attributes.genre}</h4>
                </div>
                </Link>
              </div>
            ))}
          </div>
      </div>
      <Footer />
    </div>
  )
}

export default dynamic (() => Promise.resolve(index), {ssr: false})