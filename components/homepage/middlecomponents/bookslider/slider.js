import React from 'react'
import Slider from "react-slick";
import Image from "next/image";
import styles from '../../../../styles/homecomponents/bookslider.module.css'
import Link from 'next/link';

const slider = ({fiction}) => {

  var settings = {
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
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
    <>
     <Slider {...settings} className={styles.slider}> 

       {fiction.reverse().slice(0,6).map(data =>
      <div key={data.id} className={styles.bvcard}>
      <Link className={styles.link} href={data.attributes.genre ? `/Authorbooks/${data.id}` : `/Awardwinners/${data.id}`} >
      <div className={styles.slide}>
        <div className={styles.bvimgcont}>
          <Image loader={() => data.attributes.img.data.attributes.url} src={data.attributes.img.data.attributes.url} width={400} height={400} unoptimized={true} alt="Book Image" />
        </div>
        <div className={styles.bvcardinfo}>
          <h2>{data.attributes.name}</h2>
          <h4>{data.attributes.genre && <div>Genre - {data.attributes.genre}</div>}</h4>
        </div>
      </div>

        </Link>
      </div>)}
      
     </Slider>
    </>
  )
}

export default slider;