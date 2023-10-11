import React from 'react'
import Topcomponent from "../../components/homepage/topcomponent";
import Footer from "../../components/homepage/bottomcomponent/footer";
import styles from '../../styles/books/books.module.css'
import Image from 'next/image';
import Link from 'next/link';
import dynamic from "next/dynamic";

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/authors`, {
    headers: {
     Authorization: "bearer "+process.env.NEXT_PUBLIC_TOKEN,
   } 
   });
  const items = await res.json();
  const paths = items.data.map(item =>{
    return{
      params:{
        id : item.id.toString(),
      } 
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/authors/${id}?populate[books][populate]=*`, {
          headers: {
           Authorization: "bearer "+process.env.NEXT_PUBLIC_TOKEN,
         } 
         })
  const data = await res.json()
    return {
    props: {
      product:data.data.attributes
    },
  };
};

const books = ({product}) => {

  return (
    <div>
      <Topcomponent />
      <div className={styles.container}>
      <div className={styles.title}>{product.name}</div>
      <hr className={styles.hr}/>
      <div className={styles.cards}>
        {product.books.data.map(data =>
          <div className={styles.card} key={data.id}>
          <Link className={styles.link} href={`/Book/${data.id}`}>
            <Image className={styles.img} loader={() => data.attributes.img.data.attributes.url} unoptimized={true} src={data.attributes.img.data.attributes.url} width={400} height={400} alt="Book Image" />
            <div className={styles.name}>{data.attributes.name}</div>
          </Link>
          </div>
        )}
      </div>

      </div>
      <Footer />
    </div>
  )
}

export default dynamic (() => Promise.resolve(books), {ssr: false})