import React from 'react'
import styles from '../../../styles/homecomponents/books.module.css'
import Image from 'next/image'

const bookssection = () => {
  const arr = [
    { url : '/booksimages/1 (1).jpeg',
      name : 'Dan Brown',
      genre : 'Thriller',
      id:1,
                },
    { url : '/booksimages/1 (2).jpeg',
      name : 'JK Rowling',
      genre : 'Magical Realism',
      id:2,
                },
    { url : '/booksimages/1 (3).jpeg',
      name : 'Arundhati Roy',
      genre : 'Historical Fiction',
      id:3,
                },
    { url : '/booksimages/1 (4).jpeg',
      name : 'Ahmed Salman Rushdie',
      genre : 'Magical Realism',
      id:4,
                },
    { url : '/booksimages/1 (5).jpeg',
      name : 'Nilanjana Sudeshna Jhumpa Lahiri',
      genre : 'Historical Fiction',
      id:5,
                },
    { url : '/booksimages/1 (6).jpeg',
      name : 'Jeffrey Archer',
      genre : 'Thriller',
      id:6,
                },
    { url : '/booksimages/1 (7).jpeg',
      name : 'Charles Dickens',
      genre : 'Classic',
      id:7,
                },
    { url : '/booksimages/1 (8).jpeg',
      name : 'Ernest Hemingway',
      genre : 'Classic',
      id:8,
                },    
    { url : '/booksimages/1 (9).jpeg',
      name : 'Jane Austen',
      genre : 'Classic',
      id:9,
                },  
]
  const arr2 = [
  { url : '/booksimages/2 (1).jpeg',
    name : 'Carl Sagan',
    genre : 'Popular Science',
    id:1,
              },
  { url : '/booksimages/2 (2).jpeg',
    name : 'Yuval Noah Harari',
    genre : 'Historical Non-Fiction',
    id:2,
              },
  { url : '/booksimages/2 (3).jpeg',
    name : 'Richard Feynhan',
    genre : 'Popular Science',
    id:3,
              },
  { url : '/booksimages/2 (4).jpeg',
    name : 'Richard Dawkins',
    genre : 'Popular Science',
    id:4,
              },
  { url : '/booksimages/2 (5).jpeg',
    name : 'Siddharth Mukherjee',
    genre : 'Genral Non-Fiction',
    id:5,
              },
]

  return (
    <div className={styles.container}>
    <div className={styles.topcontainer}>
      <div className={styles.topic}>Join a community</div>
      <hr className={styles.hr}/>
      <button className={styles.button}>Check what we do at our bookclubs!</button>
    </div>

      <div className={styles.bvsection}>

    <h1 className={styles.title}>Fiction</h1>
  
  <div className={styles.bvcontainer}>
  {arr.map(data =>
      <div className={styles.bvcard} key={data.id}>
        <div className={styles.bvimgcont}>
          <Image src={data.url} width={400} height={400} alt="Book Image" />
        </div>
        <div className={styles.bvcardinfo}>
          <h2>{data.name}</h2>
          <h4>Genre - {data.genre}</h4>
        </div>
      </div>)}
      </div>

  
      <h1 className={styles.title}>Non-Fiction</h1>
  
      <div className={styles.bvcontainer}>
      {arr2.map(data =>
      <div className={styles.bvcard} key={data.id}>
        <div className={styles.bvimgcont}>
          <Image src={data.url} width={400} height={400} alt="Book Image" />
        </div>
        <div className={styles.bvcardinfo}>
          <h2>{data.name}</h2>
          <h4>Genre - {data.genre}</h4>
        </div>
      </div>)}
      </div>
    
  </div>
  </div>
  )
}

export default bookssection