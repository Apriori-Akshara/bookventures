import Slider from "react-slick";
import Image from "next/image";
import styles from '../../../../styles/homecomponents/lower/members.module.css'

const slider = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
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
    <div>
     <Slider {...settings} className={styles.slider}> 
      <div className={styles.card}>
        <Image className={styles.profileimg} src={'/homepage/low/profile (1).jpeg'} width={300} height={300} alt='image'/>
        <div className={styles.review}>"amazing club. if thee enjoys book and want to discuss with others. i..."</div>
        {/* <div className={styles.fullreview}>Read full review...</div> */}
        <div className={styles.name}>Sushma Yadav</div>
      </div>
      <div className={styles.card}>
        <Image className={styles.profileimg} src={'/homepage/low/profile (2).jpeg'} width={300} height={300} alt='image'/>
        <div className={styles.review}>"amazing club. if thee enjoys book and want to discuss with others. i..."</div>
        {/* <div className={styles.fullreview}>Read full review...</div> */}
        <div className={styles.name}>Jaspreet Singh</div>
      </div>
      <div className={styles.card}>
        <Image className={styles.profileimg} src={'/homepage/low/profile (3).jpeg'} width={300} height={300} alt='image'/>
        <div className={styles.review}>"amazing club. if thee enjoys book and want to discuss with others. i..."</div>
        {/* <div className={styles.fullreview}>Read full review...</div> */}
        <div className={styles.name}>Shrishti Sharma</div>
      </div>
     </Slider>
    </div>
  )
}

export default slider;