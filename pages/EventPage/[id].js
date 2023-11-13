import Topcomponent from "../../components/homepage/topcomponent";
import Footer from "../../components/homepage/bottomcomponent/footer";
import styles from "../../styles/eventspage/eventpage.module.css"
import EventsSlider from '../../components/EventsSlider/EventsSlider'

export function getServerSideProps(context) {
  return {
    props: {params: context.params}
  };
}

const EventPage = ({params}) => {
  const {id} = params;

  const data = [
    { id:1,
     title:'Halloween Party',
     date:'31st Oct 2023',
     url:'/eventspage/posters/October 31,2023.jpg',
     images:['/eventspage/images/halloween/img (1).jpeg','/eventspage/images/halloween/img (2).jpeg','/eventspage/images/halloween/img (3).jpeg','/eventspage/images/halloween/img (4).jpeg']},
     { id:2,
       title:'Halloween Party',
       date:'31st Oct 2023',
       url:'/eventspage/posters/Young Poet Award.png'},
       { id:3,
         title:'Halloween Party',
         date:'31st Oct 2023',
         url:'/eventspage/posters/youngaa.jpeg'},
    ]

    const event = []
    data.map((data) => {if(data.id.toString() === id){
      event.push(data)
    }})


  return (
    <div>
      <Topcomponent />
        <div className={styles.container}>
        <div className={styles.titlecontainer}><div className={styles.topic}>{event[0].title}</div></div>
        <EventsSlider event={event}/>
        </div>
      <Footer />
    </div>
  )
}

export default EventPage