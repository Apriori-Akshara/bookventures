import React from 'react'
import styles from '../../../styles/homecomponents/books.module.css'
import Slider from './bookslider/slider'
import Awards from './bookslider/awardsslider'

const bookssection = ({data,data2}) => {

  console.log(data2)

 let fictionindian = data.filter(data => data.attributes.isfiction === true && data.attributes.iskids === false && data.attributes.isIndian === true);
 let fictionnonindian = data.filter(data => data.attributes.isfiction === true && data.attributes.iskids === false && data.attributes.isIndian === false);
 let nonfictionnonindian = data.filter(data => data.attributes.isfiction === false && data.attributes.iskids === false);

  return (
    <div className={styles.container}>
      <div className={styles.bvsection}>
        <h1 className={styles.title}>Fiction</h1>
        <div className={styles.bcontainer}>
          <Awards fiction={data2}/>
          <Slider fiction={fictionindian}/>
          <Slider fiction={fictionnonindian}/>  
        </div>
        <h1 className={styles.title}>Non-Fiction</h1>
        <div className={styles.bcontainer}>
          <Slider fiction={nonfictionnonindian}/>
        </div>
    </div>
    </div>
  )
}

export default bookssection