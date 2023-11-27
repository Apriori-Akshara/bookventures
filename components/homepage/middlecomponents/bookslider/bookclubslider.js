import React from 'react'
import Slider from "react-slick";
import Image from "next/image";
import styles from '../../../../styles/teststyles/bookclubslider.module.css'

const slider = () => {

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

  var settings = {
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className={styles.slidercontainer}>
     <Slider {...settings} className={styles.slider}> 
       {info.map(data => <div key={data.id} className={styles.card}>
          <div className={styles.inner}>
                <h3 className={styles.name}>{data.name}</h3>
                <div className={styles.imgcont}>
                  <Image src={data.src} className={styles.img} width={400} height={300} alt='image'/>
                </div>
                <div className={styles.info}>
                  <div><span className={styles.inform}>Date:</span> {data.date}</div>
                  <div><span className={styles.inform}>Time:</span> {data.time}</div>
                </div>
          </div>

              </div>)}
     </Slider>
    </div>
  )
}

export default slider;