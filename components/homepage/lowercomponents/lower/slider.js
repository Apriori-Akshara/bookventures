import Slider from "react-slick";
import Image from "next/image";
import styles from '../../../../styles/homecomponents/lower/members.module.css'

const slider = () => {

  var settings = {
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
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
    {id:1,src:'/homepage/low/members-kids (3).jpeg',review:"Bookventures Kids has lots of fun activities which have helped me improve my speaking, reading, and writing skills.",name:"Arhan"},
    {id:2,src:'/homepage/low/members-adults (1).jpg',review:"I have been looking to be a part of a book community and Bookventures allows for intellectual engagement from the comfort of my home.",name:"Aparna"},
    {id:3,src:'/homepage/low/members-kids (4).jpeg',review:"I love being a part of Bookventures Kids because I get to read all my favourite authors and books along with my friends.",name:"Ishanvi"},
    {id:4,src:'/homepage/low/members-adults (2).jpg',review:"It is a perfect activity for the entire family since the range of virtual and offline events have something for all age groups.",name:"Nandini"},



    {id:5,src:'/homepage/low/members-kids (7).jpeg',review:"I just love the vocab quizzes, storytelling activities and writing contests because I always manage to win prizes.",name:"Swastik"},
    {id:6,src:'/homepage/low/members-adults (3).jpg',review:"Of all the book clubs I have been a part of, this is the most dynamic one since they also organize several events.",name:"Vishaka"},
    {id:7,src:'/homepage/low/members-kids (2).jpeg',review:"All the teachers are excellent and very helpful. My confidence has improved after joining Bookventures Kids.",name:"Sara"},
    {id:8,src:'/homepage/low/members-adults (4).jpg',review:"It is rare to connect with other readers in a conducive environment that also allows for literary discussions in a meaningful way.",name:"Priyanka"},



    // {id:9,src:'/homepage/low/members-kids (1).jpeg',review:"amazing club. if thee enjoys book and want to discuss with others. Lorem ipsum dolor sit amet",name:"Mishika"},
    // {id:10,src:'/homepage/low/members-adults (5).jpg',review:"amazing club. if thee enjoys book and want to discuss with others. Lorem ipsum dolor sit amet",name:"Mandika"},
    // {id:11,src:'/homepage/low/members-adults (7).jpg',review:"amazing club. if thee enjoys book and want to discuss with others. Lorem ipsum dolor sit amet",name:"Dyumna"},
    // {id:12,src:'/homepage/low/members-adults (6).jpg',review:"amazing club. if thee enjoys book and want to discuss with others. Lorem ipsum dolor sit amet",name:"Sanyam"},
  ]

  return (
    <>
     <Slider {...settings} className={styles.slider}> 
     
      {arr.map(data => <div key={data.id} className={styles.card}>
      <div className={styles.slide}>
      <div className={styles.svgcontainer}><Image className={styles.svg} src={'/slidersvg/quote-svgrepo-com.svg'} width={300} height={300} alt='image'/></div>
      <div className={styles.imgcontainer}>
        <Image className={styles.profileimg} src={data.src} width={300} height={300} alt='image'/>
      </div>
        
        <div className={styles.review}>{data.review}</div>
        <div className={styles.name}>{data.name}</div>
      </div>
      </div>)}
      
     </Slider>
    </>
  )
}

export default slider;