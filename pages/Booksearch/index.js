import React from 'react'
import Topcomponent from "../../components/homepage/topcomponent";
import Footer from "../../components/homepage/bottomcomponent/footer";
import styles from '../../styles/booksearch/booksearch.module.css'
import Link from 'next/link';
import Image from 'next/image';
import {BsSearch} from 'react-icons/bs'

export const getStaticProps = async () => {
  const resulting = await fetch(`${process.env.NEXT_PUBLIC_URL}/books?populate=*`, {
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
  
  return (
    <div>
      <Topcomponent />
      <div className={styles.container}>
      <div className={styles.topic}>Search For The Books You Like</div>
      <h1 className={styles.title}>Search</h1>
      <div className={styles.searchcontainer}>
        <input placeholder='search by writing the name' />
        <button><BsSearch /></button>
      </div>
      <div className={styles.cards}>
        {data.reverse().slice(0,8).map(data=>{
          return <div className={styles.card} key={data.id}>
          <Link className={styles.link} href={`/Book/${data.id}`}>
            <Image className={styles.img} loader={() => data.attributes.img.data.attributes.url} unoptimized={true} src={data.attributes.img.data.attributes.url} width={400} height={400} alt="Book Image" />
            <div className={styles.name}>{data.attributes.name}</div>
          </Link>
          </div>
        })}
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default index