import { useRouter } from 'next/router';
import Topcomponent from "../../components/homepage/topcomponent";
import Footer from "../../components/homepage/bottomcomponent/footer";
import styles from "../../styles/eventspage/eventpage.module.css"

const EventPage = () => {
  const router = useRouter();
  const {id} = router.query;

  const data = [
    { id:1,
     title:'Halloween Party',
     date:'31st Oct 2023',
     url:'/eventspage/posters/October 31,2023.jpg'},
     { id:2,
       title:'Halloween Party',
       date:'31st Oct 2023',
       url:'/eventspage/posters/October 31,2023.jpg'},
       { id:3,
         title:'Halloween Party',
         date:'31st Oct 2023',
         url:'/eventspage/posters/October 31,2023.jpg'},
    ]

    const event = []
    data.map((data) => {if(data.id.toString() === id){
      event.push(data)
    }})
    console.log(event)


  return (
    <div>
      <Topcomponent />
        <div className={styles.container}>
        <div className={styles.topic}>{event[0].title}</div>
        </div>
      <Footer />
    </div>
  )
}

export default EventPage