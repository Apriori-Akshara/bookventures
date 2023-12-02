import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../../../styles/teststyles/slider.module.css'

const [image1, image2, image3] = [ "/homepage/heroimage/2.png","/homepage/heroimage/3.png","/homepage/heroimage/4.png",
]

const Heroslider = () => {

  const [selectedImage, setSelectedImage] = useState(0)
  const [allImages, setAllImages] = useState([image1, image2, image3])

  useEffect(() => {
    setInterval(() => {
      setSelectedImage(selectedImage => selectedImage < 2 ? selectedImage + 1 : 0)
    }, 8000)
  }, [])


  return (
    <div className={styles.container}>
    <div className={styles.black}></div>
      <Image className={styles.img} width={2400} height={1600} src={allImages[selectedImage]} alt="image"/> <br />
    </div>
  )
}

export default Heroslider