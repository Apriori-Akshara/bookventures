import Footer from "../../components/homepage/bottomcomponent/footer";
import styles from "../../styles/kids/kids.module.css";
import dynamic from "next/dynamic";
import Grid from "../../components/homepage/middlecomponents/Grid";
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

export const getStaticProps = async () => {
  const resulting = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/authors?populate=*`,
    {
      headers: {
        Authorization: "bearer " + process.env.NEXT_PUBLIC_TOKEN,
      },
    }
  );
  const result = await resulting.json();
  return {
    props: {
      data: result.data,
    },
  };
};

const index = ({ data }) => {

  const dispatch = useDispatch();
  const modal = useSelector(state => state.modal);
  const loginmodal = useSelector(state => state.loginmodal);
  const profilemodal = useSelector(state => state.profile);
  
  let fiction = data.filter(
    (data) =>
      data.attributes.isfiction === true && data.attributes.iskids === true
  );
  let nonfiction = data.filter(
    (data) =>
      data.attributes.isfiction === false && data.attributes.iskids === true
  );

  return (
    <>
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.topic}>Bookventures Kids</div>
        <h1 className={styles.title}>Fiction</h1>

        <div>
          <Grid data={fiction} />
        </div>

        {/* <div className={styles.bvcontainer}>
            {fiction.map((data) => (
              
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
          </div> */}

        {/* <h1 className={styles.title}>Non-Fiction</h1>

          <div className={styles.bvcontainer}>
            {nonfiction.map((data) => (
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
          </div> */}
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

export default dynamic(() => Promise.resolve(index), { ssr: false });
