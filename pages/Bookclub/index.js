import Topcomponent from "../../components/homepage/topcomponent";
import Footer from "../../components/homepage/bottomcomponent/footer";
import styles from '../../styles/bookclubs/bookclubs.module.css'
import Image from "next/image";

const index = () => {

  const info = [
    {
      id:1,
      src:'/bookclubs/sudhamurty/sudhamurty.jpeg',
      name: 'Sudha Murty Bookclub',
      date: 'TBD',
      time: 'TBD',
    },
    {
      id:2,
      src:'/bookclubs/ruskinbond/ruskinbond.jpeg',
      name: 'Ruskin Bond Bookclub',
      date: 'TBD',
      time: 'TBD',
    },
    {
      id:3,
      src:'/bookclubs/bookawards/bookerprize.jpeg',
      name: 'Booker Prize Bookclub',
      date: 'TBD',
      time: 'TBD',
    },
    {
      id:4,
      src:'/bookclubs/bookawards/jcbprize.jpeg',
      name: 'JCB Prize Bookclub',
      date: 'TBD',
      time: 'TBD',
    },
    {
      id:5,
      src:'/bookclubs/bookawards/attagalatta.png',
      name: 'Atta Galatta Bookclub',
      date: 'TBD',
      time: 'TBD',
    },
  ]

  return (
    <div>
      <Topcomponent />
        <div className={styles.container}>
          <div className={styles.topic}>Bookclubs</div>
            <div className={styles.subcontainer}>
            {info.map(data => <div key={data.id} className={styles.card}>
                <h3 className={styles.name}>{data.name}</h3>
                <div className={styles.imgcont}>
                  <Image src={data.src} className={styles.img} width={400} height={300} alt='image'/>
                </div>
                <div className={styles.info}>
                  <div><span className={styles.inform}>Date:</span> {data.date}</div>
                  <div><span className={styles.inform}>Time:</span> {data.time}</div>
                </div>
              </div>
            )}
            </div>
        </div>
      <Footer />
    </div>
  )
}

export default index