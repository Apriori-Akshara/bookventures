import Topcomponent from "../../components/homepage/topcomponent";
import Footer from "../../components/homepage/bottomcomponent/footer";
import styles from "../../styles/bookclubs/bookclubs.module.css";
import Image from "next/image";
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

const index = () => {

  const dispatch = useDispatch();
  const modal = useSelector(state => state.modal);
  const loginmodal = useSelector(state => state.loginmodal);
  const profilemodal = useSelector(state => state.profile);

  const info = [
    {
      id: 1,
      src: "/bookclubs/sudhamurty/sudhamurty.jpeg",
      name: "Sudha Murty Book Club",
      date: "TBD",
      time: "TBD",
    },
    {
      id: 2,
      src: "/bookclubs/ruskinbond/ruskinbond.jpeg",
      name: "Ruskin Bond Book Club",
      date: "TBD",
      time: "TBD",
    },
    {
      id: 3,
      src: "/bookclubs/bookawards/bookerprize.jpeg",
      name: "Booker Prize Book Club",
      date: "TBD",
      time: "TBD",
    },
    {
      id: 4,
      src: "/bookclubs/bookawards/jcbprize.jpeg",
      name: "JCB Prize Book Club",
      date: "TBD",
      time: "TBD",
    },
    {
      id: 5,
      src: "/bookclubs/bookawards/attagalatta.png",
      name: "Atta Galatta Book Club",
      date: "TBD",
      time: "TBD",
    },
  ];

  return (
    <>
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.topic}>Book Clubs</div>
        <div className={styles.subcontainer}>
          {info.map((data) => (
            <div key={data.id} className={styles.card}>
              <h3 className={styles.name}>{data.name}</h3>
              <div className={styles.imgcont}>
                <Image
                  src={data.src}
                  className={styles.img}
                  width={400}
                  height={300}
                  alt="image"
                />
              </div>
              <div className={styles.info}>
                <div>
                  <span className={styles.inform}>Date:</span> {data.date}
                </div>
                <div>
                  <span className={styles.inform}>Time:</span> {data.time}
                </div>
              </div>
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

export default index;
