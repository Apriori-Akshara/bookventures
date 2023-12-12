import Navbar from "../../components/testpage/navbar/Newnavbar";
import Footer from "../../components/homepage/bottomcomponent/footer";
import styles from "../../styles/eventspage/eventpage.module.css"
import EventsSlider from '../../components/EventsSlider/EventsSlider'
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

export function getServerSideProps(context) {
  return {
    props: {params: context.params}
  };
}

const EventPage = ({params}) => {

  const dispatch = useDispatch();
  const modal = useSelector(state => state.modal);
  const loginmodal = useSelector(state => state.loginmodal);
  const profilemodal = useSelector(state => state.profile);
  const {id} = params;

  const data = [
    { id:1,
      title:"Readers' Salon",
      date:'Sat, 26th Nov 2023 ',
      url:'/eventspage/posters/Podcast Insta.jpg',
      time:'7 PM',
      desc:'',
      images:['/eventspage/posters/Podcast Insta.jpg','/eventspage/images/podcaste 1/1 (1).jpeg','/eventspage/images/podcaste 1/1 (2).jpeg','/eventspage/images/podcaste 1/1 (2).jpeg']},
    { id:2,
      title:'Halloween Party',
      date:'31st Oct 2023',
      url:'/eventspage/posters/October 31,2023.jpg',
      images:['/eventspage/images/halloween/img (1).jpeg','/eventspage/images/halloween/img (2).jpeg','/eventspage/images/halloween/img (3).jpeg','/eventspage/images/halloween/img (4).jpeg']},
      { id:3,
        title:'Young Poet Award 2023',
        date:'TBD',
        url:'/eventspage/posters/YoungPoetAward.png',
        images:['/eventspage/posters/YoungPoetAward.png']},
   ]

    const event = []
    data.map((data) => {if(data.id.toString() === id){
      event.push(data)
    }})


  return (
    <>
    <div>
        <Navbar />
        <div className={styles.container}>
        <div className={styles.titlecontainer}><div className={styles.topic}>{event[0].title}</div></div>
        <EventsSlider event={event}/>
        <div className={styles.titlecontainer}><div className={styles.topic}>Event Details</div></div>
        <div className={styles.details}>
          Date: {event[0].date}
          {event[0].time && <div>Time: {event[0].time}</div>}
          {event[0].desc && <div>Time: {event[0].desc}</div>}
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

export default EventPage