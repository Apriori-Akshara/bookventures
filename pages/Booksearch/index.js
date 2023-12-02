import React, { useState, useEffect } from "react";
// import Topcomponent from "../../components/homepage/topcomponent";
import Footer from "../../components/homepage/bottomcomponent/footer";
import styles from "../../styles/booksearch/booksearch.module.css";
import Link from "next/link";
import Image from "next/image";
// import {BsSearch} from 'react-icons/bs'
import axios from "axios";
import dynamic from "next/dynamic";
import Navbar from "../../components/testpage/navbar/Newnavbar";

const Index = () => {
  const [product, setProduct] = useState([]);
  const [starts, setStarts] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.NEXT_PUBLIC_URL +
            `/books?filters[name][$startsWithi]=${starts}&populate=*`,
          {
            headers: {
              Authorization: "bearer " + process.env.NEXT_PUBLIC_TOKEN,
            },
          }
        );
        setProduct(res.data.data);
        console.log(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [starts]);

  console.log(starts);

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.topic}>Search for the books you like</div>
        <h1 className={styles.title}>Search</h1>
        <div className={styles.searchcontainer}>
          <input
            placeholder="search by writing the name"
            value={starts}
            onChange={(e) => setStarts(e.target.value)}
          />
          {/* <button><BsSearch /></button> */}
        </div>
        <div className={styles.cards}>
          {product
            .reverse()
            .slice(0, 8)
            .map((data) => {
              return (
                <div className={styles.card} key={data.id}>
                  <Link className={styles.link} href={`/Book/${data.id}`}>
                    <Image
                      className={styles.img}
                      loader={() => data.attributes.img.data.attributes.url}
                      unoptimized={true}
                      src={data.attributes.img.data.attributes.url}
                      width={400}
                      height={400}
                      alt="Book Image"
                    />
                    <div className={styles.name}>{data.attributes.name}</div>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default dynamic(() => Promise.resolve(Index), { ssr: false });
