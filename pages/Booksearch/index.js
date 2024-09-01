import React, { useState, useEffect } from "react";
import Footer from "../../components/homepage/bottomcomponent/footer";
import styles from "../../styles/booksearch/booksearch.module.css";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import dynamic from "next/dynamic";
import Navbar from "../../components/testpage/navbar/Newnavbar";
import Modal from "../../components/Modal/Modal";
import MyComponent from "../../components/Modal/Mycomponent";
import LoginModal from '../../components/Loginmodal/LoginModal'
import LoginComponent from '../../components/Loginmodal/LoginComponent'
import { useDispatch, useSelector } from "react-redux";
import { falsey } from "../../store/slices/modalSlice";
import { falcey } from "../../store/slices/loginSlice/loginmodalSlice";
import ProfileModal from '../../components/Porfilemodal/ProfileModal'
import ProfileComponent from '../../components/Porfilemodal/ProfileComponent'
import { falsch } from '../../store/slices/ProfileSlice/ProfileSlice'

const Index = () => {

  const dispatch = useDispatch();
  const modal = useSelector(state => state.modal);
  const loginmodal = useSelector(state => state.loginmodal);
  const profilemodal = useSelector(state => state.profile);
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
    <>
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.topic}>Book Search</div>
        <h1 className={styles.title}>Search for the books you like</h1>
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
    <Modal open={modal.value}>
        <MyComponent onClose={() => dispatch(falsey())} />
      </Modal>
      <LoginModal logopen={loginmodal.value}>
        <LoginComponent onCloselog={() => dispatch(falcey())}/>
      </LoginModal>
      <ProfileModal proopen={profilemodal.value}>
        <ProfileComponent onClosepro={() => dispatch(falsch())}/>
      </ProfileModal>
    </>

  );
};

export default dynamic(() => Promise.resolve(Index), { ssr: false });
