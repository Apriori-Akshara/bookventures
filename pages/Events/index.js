import Navbar from "../../components/testpage/navbar/Newnavbar";
import Footer from "../../components/homepage/bottomcomponent/footer";
import styles from "../../styles/eventspage/eventspage.module.css";
import Image from "next/image";
import Link from "next/link";
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
  
  const data = [
    {
      id: 1,
      title: "Readers' Salon",
      date: "Sat, 26th Nov 2023 ",
      url: "/eventspage/posters/Podcast Insta.jpg",
      images: [
        "/eventspage/posters/Podcast Insta.jpg",
        "/eventspage/posters/Podcast Insta.jpg",
        "/eventspage/posters/Podcast Insta.jpg",
        "/eventspage/posters/Podcast Insta.jpg",
      ],
    },
    {
      id: 2,
      title: "Halloween Party",
      date: "31st Oct 2023",
      url: "/eventspage/posters/October 31,2023.jpg",
      images: [
        "/eventspage/images/halloween/img (1).jpeg",
        "/eventspage/images/halloween/img (2).jpeg",
        "/eventspage/images/halloween/img (3).jpeg",
        "/eventspage/images/halloween/img (4).jpeg",
      ],
    },
    {
      id: 3,
      title: "Young Poet Award 2023",
      date: "TBD",
      url: "/eventspage/posters/YoungPoetAward.png",
      images: ["/eventspage/posters/YoungPoetAward.png"],
    },
  ];

  return (
    <>
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.topic}>Events</div>
        <div className={styles.grid}>
          {data.map((data) => (
            <div key={data.id} className={styles.card}>
              <Link className={styles.link} href={`/EventPage/${data.id}`}>
                <div className={styles.imgcontainer}>
                  <Image
                    className={styles.img}
                    src={data.url}
                    width={300}
                    height={300}
                    alt="poster"
                  />
                </div>
                <div className={styles.info}>
                  <h3>{data.title}</h3>
                  <p>Date - {data.date}</p>
                </div>
              </Link>
            </div>
          ))}
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

export default Index;
