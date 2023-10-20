import Slider from "react-slick";
import Image from "next/image";
import styles from '../../../../styles/homecomponents/lower/members.module.css'

const slider = () => {

  var settings = {
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

  let arr = [
    {src:'/homepage/low/members-kids (3).jpeg',review:"amazing club. if thee enjoys book and want to discuss with others. Lorem ipsum dolor sit amet",name:"Arhan"},
    {src:'/homepage/low/members-kids (4).jpeg',review:"amazing club. if thee enjoys book and want to discuss with others. Lorem ipsum dolor sit amet",name:"Ishanvi"},
    {src:'/homepage/low/members-kids (7).jpeg',review:"amazing club. if thee enjoys book and want to discuss with others. Lorem ipsum dolor sit amet",name:"Swastik"},
    {src:'/homepage/low/members-adults (1).jpg',review:"amazing club. if thee enjoys book and want to discuss with others. Lorem ipsum dolor sit amet",name:"Aparna"},
    {src:'/homepage/low/members-adults (2).jpg',review:"amazing club. if thee enjoys book and want to discuss with others. Lorem ipsum dolor sit amet",name:"Nandini"},
    {src:'/homepage/low/members-kids (2).jpeg',review:"amazing club. if thee enjoys book and want to discuss with others. Lorem ipsum dolor sit amet",name:"Sara"},
    {src:'/homepage/low/members-kids (1).jpeg',review:"amazing club. if thee enjoys book and want to discuss with others. Lorem ipsum dolor sit amet",name:"Mishika"},
    {src:'/homepage/low/members-adults (3).jpg',review:"amazing club. if thee enjoys book and want to discuss with others. Lorem ipsum dolor sit amet",name:"Vishaka"},
  ]

  return (
    <>
     <Slider {...settings} className={styles.slider}> 
     
      {arr.map(data => <div className={styles.card}>
      <div className={styles.slide}>
      <div className={styles.imgcontainer}>
        <Image className={styles.profileimg} src={data.src} width={300} height={300} alt='image'/>
      </div>
        
        <div className={styles.review}>{data.review}</div>
        <div className={styles.name}>{data.name}</div>
      </div>
      </div>)}

      {/* <div className={styles.card}>
      <div className={styles.slide}>
      <div className={styles.imgcontainer}>
        <Image className={styles.profileimg} src={'/homepage/low/members-kids (2).jpeg'} width={300} height={300} alt='image'/>
      </div>
        <div className={styles.review}>"amazing club. if thee enjoys book and want to discuss with others. Lorem ipsum dolor sit amet</div>
        <div className={styles.name}>Sara</div>
        </div>
      </div>
      <div className={styles.card}>
      <div className={styles.slide}>
      <div className={styles.imgcontainer}>
        <Image className={styles.profileimg} src={'/homepage/low/members-kids (3).jpeg'} width={300} height={300} alt='image'/>
      </div>
        <div className={styles.review}>"amazing club. if thee enjoys book and want to discuss with others. Lorem ipsum dolor sit amet</div>
        <div className={styles.name}>Arhan</div>
        </div>
      </div>
      <div className={styles.card}>
      <div className={styles.slide}>
      <div className={styles.imgcontainer}>
        <Image className={styles.profileimg} src={'/homepage/low/members-kids (4).jpeg'} width={300} height={300} alt='image'/>
      </div>
        <div className={styles.review}>"amazing club. if thee enjoys book and want to discuss with others. Lorem ipsum dolor sit amet</div>
        <div className={styles.name}>Ishanvi</div>
        </div>
      </div>
      <div className={styles.card}>
      <div className={styles.slide}>
      <div className={styles.imgcontainer}>
        <Image className={styles.profileimg} src={'/homepage/low/members-kids (1).jpeg'} width={300} height={300} alt='image'/>
      </div>
        <div className={styles.review}>"amazing club. if thee enjoys book and want to discuss with others. Lorem ipsum dolor sit amet</div>
        <div className={styles.name}>Mishika</div>
        </div>
      </div>
      <div className={styles.card}>
      <div className={styles.slide}>
      <div className={styles.imgcontainer}>
        <Image className={styles.profileimg} src={'/homepage/low/members-kids (6).jpeg'} width={300} height={300} alt='image'/>
      </div>
        <div className={styles.review}>"amazing club. if thee enjoys book and want to discuss with others. Lorem ipsum dolor sit amet</div>
        <div className={styles.name}>Naitik</div>
        </div>
      </div>
      <div className={styles.card}>
      <div className={styles.slide}>
      <div className={styles.imgcontainer}>
        <Image className={styles.profileimg} src={'/homepage/low/members-kids (5).jpeg'} width={300} height={300} alt='image'/>
      </div>
        <div className={styles.review}>"amazing club. if thee enjoys book and want to discuss with others. Lorem ipsum dolor sit amet</div>
        <div className={styles.name}>Ridhika</div>
        </div>
      </div> */}
      
     </Slider>
    </>
  )
}

export default slider;