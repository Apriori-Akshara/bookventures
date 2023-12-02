import Topcomponent from "@/components/homepage/topcomponent";
import Footer from "../../components/homepage/bottomcomponent/footer";
import React from "react";
import styles from "../../styles/aboutus/aboutus.module.css";
import Image from "next/image";
import Navbar from "../../components/testpage/navbar/Navbar";

const index = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.topic}>About Us</div>
        <div className={styles.subcontainer}>
          <div className={styles.first}>
            <div>
              <Image
                className={styles.img}
                src={"/homepage/reading/3.jpg"}
                width={500}
                height={400}
                alt="image"
              />
            </div>
            <div className={styles.info}>
              <h1>Create your own community</h1>
              <p>
                Bring your ideas and find a community that cares <br />
                <br />
                {/* <b>IBC</b> Bookventures brings a revolutionary change in book club meetings with a virtual setup to connect and greet people around the world.So, if you are looking for a book club to join but are too lazy or shy to go out, join a virtual connecting space. The book club is open for all kinds of book lovers, young, old, avid readers, and first-timers.  <br /><br />
             <b>"Great stories are made with new people."</b> */}
                Bookventures offers its members to create their own community of
                bibliophiles by enabling them to create and join book clubs
                according to their own preferences. Be it thrillers, dystopian
                novels, crime fiction, or historical fiction or even to create a
                book club of their favourite series or author(s), Bookventures
                has something for readers of all age groups. The virtual set up
                allows for greater flexibility and convenience for all our
                members.
              </p>
              <button>Learn More</button>
            </div>
          </div>
          <div className={styles.sec}>
            <div>
              <Image
                className={styles.img}
                src={"/homepage/reading/4.jpg"}
                width={500}
                height={400}
                alt="image"
              />
            </div>
            <div className={styles.info}>
              <h1>Explore your skills and talents</h1>
              <p>
                Discover new avenues for exploration
                <br />
                <br />
                {/* <b>IBC</b> Bookventures fosters an environment assisting self-growth and community awareness. Our elite book communities have an application process that helps us gauge the compatibility of the group with each individual to ensure a positive experience for the entire community.  <br /><br /> */}
                Our vitrual book clubs are open to readers all across the
                country but it our goal to have offline events across the
                country. So, our members will not just be able to participate in
                online and offline literary events, such as meet the author,
                creative writing, literary quizzes, and several other engaging
                activities without paying the registration fee. <br /> <br />
                <b>The wait is over!</b>
              </p>
              <button>Join now</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default index;
