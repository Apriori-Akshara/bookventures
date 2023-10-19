import styles from '../../../styles/kids/kidshome.module.css'
import Link from 'next/link';
import Image from 'next/image';

const kidssection = ({data}) => {

  let fiction = data.filter(data => data.attributes.isfiction === true && data.attributes.iskids === true);
  let nonfiction = data.filter(data => data.attributes.isfiction === false && data.attributes.iskids === true);

  return (
    <div>
    <div className={styles.container}>
      {/* <div className={styles.topic}>Bookventures Kids</div>
      <h1 className={styles.title}>Fiction</h1> */}

      <h1 className={styles.title}>Bookventures Kids</h1>

      <div className={styles.bvcontainer}>
            {fiction.reverse().slice(0,6).map((data) => (
              
              <div className={styles.bvcard} key={data.id}>
              <Link className={styles.link} href={`/Authorbooks/${data.id}`} >
                <div className={styles.bvimgcont}>
                <Image loader={() => data.attributes.img.data.attributes.url} unoptimized={true} src={data.attributes.img.data.attributes.url} width={400} height={400} alt="Book Image" />
                </div>
                <div className={styles.bvcardinfo}>
                  <h2>{data.attributes.name}</h2>
                  <h4>Genre - {data.attributes.genre}</h4>
                </div>
                </Link>
              </div>
              
            ))}
          </div>

          {/* <h1 className={styles.title}>Non-Fiction</h1>

          <div className={styles.bvcontainer}>
            {nonfiction.map((data) => (
              <div className={styles.bvcard} key={data.id}>
              <Link className={styles.link} href={`/Authorbooks/${data.id}`} >
                <div className={styles.bvimgcont}>
                <Image loader={() => data.attributes.img.data.attributes.url} src={data.attributes.img.data.attributes.url} width={400} height={400} alt="Book Image" />
                </div>
                <div className={styles.bvcardinfo}>
                  <h2>{data.attributes.name}</h2>
                  <h4>Genre - {data.attributes.genre}</h4>
                </div>
                </Link>
              </div>
            ))}
          </div> */}
    </div>
    </div>
  )
}

export default kidssection