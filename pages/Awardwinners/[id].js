import React from 'react'
import Navbar from "../../components/testpage/navbar/Newnavbar";
import Footer from "../../components/homepage/bottomcomponent/footer";
import styles from '../../styles/books/books.module.css'
import Image from 'next/image';
import Link from 'next/link';
import dynamic from "next/dynamic";
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

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/awards`, {
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
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/awards/${id}?populate[books][populate]=*`, {
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

  const dispatch = useDispatch();
  const modal = useSelector(state => state.modal);
  const loginmodal = useSelector(state => state.loginmodal);
  const profilemodal = useSelector(state => state.profile);

  return (
    <>
          <div>
        <Navbar />
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

  )
}

export default dynamic (() => Promise.resolve(books), {ssr: false})