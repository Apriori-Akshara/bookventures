import Topcomponent from "../../components/homepage/topcomponent";
import Footer from "../../components/homepage/bottomcomponent/footer";
import styles from "../../styles/eventspage/eventspage.module.css"
import Image from "next/image";
import Link from "next/link";

const index = () => {

  const data = [
    { id:1,
      title:'Halloween Party',
      date:'31st Oct 2023',
      url:'/eventspage/posters/October 31,2023.jpg',
      images:['/eventspage/images/halloween/img (1).jpeg','/eventspage/images/halloween/img (2).jpeg','/eventspage/images/halloween/img (3).jpeg','/eventspage/images/halloween/img (4).jpeg']},
      { id:2,
        title:'Young Poet Award',
        date:'TBD',
        url:'/eventspage/posters/YoungPoetAward.png',
        images:[]},
        { id:3,
          title:'...',
          date:'...',
          url:'',
          images:[]},
   ]

  return (
    <div>
      <Topcomponent />
      <div className={styles.container}>
      <div className={styles.topic}>Events</div>
        <div className={styles.grid}>
        {data.map(data => <div key={data.id} className={styles.card}>
        <Link className={styles.link} href={`/EventPage/${data.id}`}>
            <div className={styles.imgcontainer}>
              <Image className={styles.img} src={data.url} width={300} height={300} alt='poster'/>
            </div>
            <div className={styles.info}>
              <h3>{data.title}</h3>
              <p>Date - {data.date}</p>
            </div>
        </Link>

          </div>
        )}

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default index