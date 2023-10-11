import React, {useState} from 'react'
import Topcomponent from "../../components/homepage/topcomponent";
import Footer from "../../components/homepage/bottomcomponent/footer";
import styles from '../../styles/singlebook/book.module.css'
import Image from 'next/image';
import dynamic from "next/dynamic";

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/books?pagination[page]=1&pagination[pageSize]=500`, {
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
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/books/${id}?populate=*`, {
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

const Book = ({product}) => {

  const [show, setShow] = useState(true)

  function showMore(){
    setShow(!show)
  }

  return (
    <div>
      <Topcomponent />
      <div className={styles.container}>
        <div className={styles.topic}>{product.name}</div>
        <hr className={styles.hr}/>
        <div className={styles.subcontainer}>
        <div>
          <Image className={styles.img} loader={() => product.img.data.attributes.url} unoptimized={true} src={product.img.data.attributes.url} width={400} height={400} alt="Book Image" />
        </div>
        <div className={styles.middle}>
          <div className={styles.heading}>Summary</div>
          <div className={styles.summary}>{show ? product.summary.slice(0,450)+(product.summary.length > 450 ? '...' : '') : product.summary} <br/><button className={product.summary.length > 450 ? styles.show : styles.hide} onClick={showMore}>Read More</button></div>
          
          <div className={styles.infocont}>
            {product.ogname ? <div className={styles.info}><b>Original title</b> : <div>{product.ogname}</div></div> : <div className={styles.info}><b>Original title</b> : <div>{product.name}</div></div>}
            {product.isbn && <div className={styles.info}><b>ISBN</b> : <div>{product.isbn}</div></div>}
            {product.lang ? <div className={styles.info}><b>Language</b> : <div>{product.lang}</div></div> : <div className={styles.info}><b>Language</b> : <div>English</div></div>}
            {product.pubdate && <div className={styles.info}><b>Published</b> : <div>{product.pubdate}</div></div>}
          </div>
        </div>
        <div className={styles.Adcontainer}>
          <Image className={styles.adimg} src={"/ads/ad2.jpeg"} width={300} height={700} unoptimized={true} alt="sidead" />
        </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default dynamic (() => Promise.resolve(Book), {ssr: false})