import React, { useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "../../components/testpage/navbar/Newnavbar";
import Footer from "../../components/homepage/bottomcomponent/footer";
import styles from "../../styles/singlebook/book.module.css";
import Image from "next/image";
import Modal from "../../components/Modal/Modal";
import MyComponent from "../../components/Modal/Mycomponent";
import LoginModal from "../../components/Loginmodal/LoginModal";
import LoginComponent from "../../components/Loginmodal/LoginComponent";
import { useDispatch, useSelector } from "react-redux";
import { falsey } from "../../store/slices/modalSlice";
import { falcey } from "../../store/slices/loginSlice/loginmodalSlice";
import { FaRegStar } from "react-icons/fa";
import { useRouter } from "next/router";
import ProfileModal from "../../components/Porfilemodal/ProfileModal";
import ProfileComponent from "../../components/Porfilemodal/ProfileComponent";
import { falsch } from "../../store/slices/ProfileSlice/ProfileSlice";
import { FiEdit2 } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";

const Book = ({ product }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const user = useSelector((state) => state.user);
  const profilemodal = useSelector((state) => state.profile);
  const loginmodal = useSelector((state) => state.loginmodal);
  const [show, setShow] = useState(true);
  const [starsubmit, setStarsubmit] = useState(false);
  const [clicked, setClicked] = useState([false, false, false, false, false]);
  const [uclicked, setuClicked] = useState([false, false, false, false, false]);
  const [editable, setEditable] = useState(true);
  const [reviewid, setReviewid] = useState();
  const [review, setReview] = useState({
    comment: "",
    stars: "",
  });
  const [ureview, setuReview] = useState({
    comment: "",
    stars: "",
  });

  const handleStarClick = (e, index) => {
    e.preventDefault();
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      if (i <= index) clickStates[i] = true;
      else clickStates[i] = false;
    }
    setClicked(clickStates);
    setStarsubmit(true);
    setReview({ ...review, stars: index + 1 });
  };

  const handleuStarClick = (e, index) => {
    e.preventDefault();
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      if (i <= index) clickStates[i] = true;
      else clickStates[i] = false;
    }
    setuClicked(clickStates);
    setStarsubmit(true);
    setuReview({ ...ureview, stars: index + 1 });
  };

  function showMore() {
    setShow(!show);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`${process.env.NEXT_PUBLIC_URL}/userreviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.user.jwt}`,
      },
      body: JSON.stringify({
        data: {
          comment: review.comment,
          stars: review.stars,
          book: router.query.id,
          name: user.user.username,
        },
      }),
    });
    router.reload();
  };

  const handleupdate = async (id) => {
    await fetch(`${process.env.NEXT_PUBLIC_URL}/userreviews/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.user.jwt}`,
      },
      body: JSON.stringify({
        data: {
          comment: ureview.comment,
          stars: ureview.stars,
        },
      }),
    });
  };

  const deletereview = async (id) => {
    await fetch(`${process.env.NEXT_PUBLIC_URL}/userreviews/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.user.jwt}`,
      },
    });
    router.reload();
  };

  function editclick(id) {
    setEditable(!editable);
    setReviewid(id);
  }
  return (
    <>
      <div>
        <Navbar />
        <div className={styles.container}>
          <div className={styles.topic}>{product.name}</div>
          <hr className={styles.hr} />
          <div className={styles.subcontainer}>
            <div>
              <Image
                className={styles.img}
                loader={() => product.img.data.attributes.url}
                unoptimized={true}
                src={product.img.data.attributes.url}
                width={400}
                height={400}
                alt="Book Image"
              />
            </div>
            <div className={styles.middle}>
              <div className={styles.heading}>Summary</div>
              <div className={styles.summary}>
                {show
                  ? product.summary.slice(0, 450) +
                    (product.summary.length > 450 ? "..." : "")
                  : product.summary}{" "}
                <br />
                <button
                  className={
                    product.summary.length > 450 ? styles.show : styles.hide
                  }
                  onClick={showMore}
                >
                  Read More
                </button>
              </div>

              <div className={styles.infocont}>
                {product.ogname ? (
                  <div className={styles.info}>
                    <div className={styles.titlename}>Original title</div>:{" "}
                    <div>{product.ogname}</div>
                  </div>
                ) : (
                  <div className={styles.info}>
                    <div className={styles.titlename}>Original title</div> :{" "}
                    <div>{product.name}</div>
                  </div>
                )}
                {product.isbn && (
                  <div className={styles.info}>
                    <b>ISBN</b>: <div>{product.isbn}</div>
                  </div>
                )}
                {product.lang ? (
                  <div className={styles.info}>
                    <b>Language</b>: <div>{product.lang}</div>
                  </div>
                ) : (
                  <div className={styles.info}>
                    <b>Language</b> : <div>English</div>
                  </div>
                )}
                {product.pubdate && (
                  <div className={styles.info}>
                    <b>Published</b>: <div>{product.pubdate}</div>
                  </div>
                )}
              </div>
            </div>
            <div className={styles.Adcontainer}>
              <Image
                className={styles.adimg}
                src={"/ads/ad2.jpeg"}
                width={300}
                height={700}
                unoptimized={true}
                alt="sidead"
              />
            </div>
          </div>
          <div className={styles.reviewcommentcont}>
            <div className={styles.commenttopic}>Leave a Comment</div>
            {user.user.username ? (
              <form onSubmit={handleSubmit} className={styles.commentsection}>
                <div className={styles.stars}>
                  <FaRegStar
                    onClick={(e) => handleStarClick(e, 0)}
                    className={
                      clicked[0]
                        ? `${styles.star} ${styles.clickedstar}`
                        : `${styles.star}`
                    }
                  />
                  <FaRegStar
                    onClick={(e) => handleStarClick(e, 1)}
                    className={
                      clicked[1]
                        ? `${styles.star} ${styles.clickedstar}`
                        : `${styles.star}`
                    }
                  />
                  <FaRegStar
                    onClick={(e) => handleStarClick(e, 2)}
                    className={
                      clicked[2]
                        ? `${styles.star} ${styles.clickedstar}`
                        : `${styles.star}`
                    }
                  />
                  <FaRegStar
                    onClick={(e) => handleStarClick(e, 3)}
                    className={
                      clicked[3]
                        ? `${styles.star} ${styles.clickedstar}`
                        : `${styles.star}`
                    }
                  />
                  <FaRegStar
                    onClick={(e) => handleStarClick(e, 4)}
                    className={
                      clicked[4]
                        ? `${styles.star} ${styles.clickedstar}`
                        : `${styles.star}`
                    }
                  />
                </div>
                <div className={styles.submitarea}>
                  <textarea
                    rows="4"
                    cols="50"
                    className={styles.area}
                    onChange={(e) =>
                      setReview({ ...review, comment: e.target.value })
                    }
                  />
                  <button type="submit" className={styles.starsub}>
                    Submit
                  </button>
                </div>
              </form>
            ) : (
              <div className={styles.createaccounttopic}>
                Create an account or Singin to leave a comment
              </div>
            )}
          </div>
          <div className={styles.reviewcommentsec}>
            <div>
              {product.userreviews.data.map((data) => (
                <div className={styles.commentcontainer} key={data.id}>
                  {data.attributes.name && (
                    <div className={styles.name}>
                      <span className={styles.spanname}>
                        {data.attributes.name}
                      </span>{" "}
                      wrote this:
                    </div>
                  )}
                  <div className={styles.lowercomment}>
                    <div className={styles.staredit}>
                      <div className={styles.stars}>
                        <FaRegStar
                          className={
                            1 <= data.attributes.stars
                              ? `${styles.sstar} ${styles.clickedstar}`
                              : `${styles.sstar}`
                          }
                        />
                        <FaRegStar
                          className={
                            2 <= data.attributes.stars
                              ? `${styles.sstar} ${styles.clickedstar}`
                              : `${styles.sstar}`
                          }
                        />
                        <FaRegStar
                          className={
                            3 <= data.attributes.stars
                              ? `${styles.sstar} ${styles.clickedstar}`
                              : `${styles.sstar}`
                          }
                        />
                        <FaRegStar
                          className={
                            4 <= data.attributes.stars
                              ? `${styles.sstar} ${styles.clickedstar}`
                              : `${styles.sstar}`
                          }
                        />
                        <FaRegStar
                          className={
                            5 <= data.attributes.stars
                              ? `${styles.sstar} ${styles.clickedstar}`
                              : `${styles.sstar}`
                          }
                        />
                      </div>
                      {data.attributes.name === user.user.username && (
                        <div className={styles.edits}>
                          <FiEdit2
                            onClick={() => editclick(data.id)}
                            className={styles.edit}
                          />
                          <FaTrash
                            onClick={() => deletereview(data.id)}
                            className={styles.trash}
                          />
                        </div>
                      )}
                    </div>
                    <div className={styles.singlecomment}>
                      {data.attributes.comment}
                    </div>
                    {!editable && reviewid === data.id && (
                      <form
                        onSubmit={() => handleupdate(data.id)}
                        className={styles.commentsection}
                      >
                        <div className={styles.starwithbtn}>
                          <div>
                            <BiArrowBack
                              onClick={() => editclick(data.id)}
                              className={styles.backbtn}
                            />
                          </div>
                          <div className={styles.stars}>
                            <FaRegStar
                              onClick={(e) => handleuStarClick(e, 0)}
                              className={
                                uclicked[0]
                                  ? `${styles.star} ${styles.clickedstar}`
                                  : `${styles.star}`
                              }
                            />
                            <FaRegStar
                              onClick={(e) => handleuStarClick(e, 1)}
                              className={
                                uclicked[1]
                                  ? `${styles.star} ${styles.clickedstar}`
                                  : `${styles.star}`
                              }
                            />
                            <FaRegStar
                              onClick={(e) => handleuStarClick(e, 2)}
                              className={
                                uclicked[2]
                                  ? `${styles.star} ${styles.clickedstar}`
                                  : `${styles.star}`
                              }
                            />
                            <FaRegStar
                              onClick={(e) => handleuStarClick(e, 3)}
                              className={
                                uclicked[3]
                                  ? `${styles.star} ${styles.clickedstar}`
                                  : `${styles.star}`
                              }
                            />
                            <FaRegStar
                              onClick={(e) => handleuStarClick(e, 4)}
                              className={
                                uclicked[4]
                                  ? `${styles.star} ${styles.clickedstar}`
                                  : `${styles.star}`
                              }
                            />
                          </div>
                        </div>

                        <div className={styles.submitarea}>
                          <textarea
                            rows="4"
                            cols="50"
                            className={styles.area}
                            onChange={(e) =>
                              setuReview({
                                ...ureview,
                                comment: e.target.value,
                              })
                            }
                          />
                          <button type="submit" className={styles.starsub}>
                            Submit
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
      <Modal open={modal.value}>
        <MyComponent onClose={() => dispatch(falsey())} />
      </Modal>
      <LoginModal logopen={loginmodal.value}>
        <LoginComponent onCloselog={() => dispatch(falcey())} />
      </LoginModal>
      <ProfileModal proopen={profilemodal.value}>
        <ProfileComponent onClosepro={() => dispatch(falsch())} />
      </ProfileModal>
    </>
  );
};

export default dynamic(() => Promise.resolve(Book), { ssr: false });
// export default Book;

export const getServerSideProps = async (context) => {
  // Get the id from the query params
  const id = context.query.id;
  // Fetch the data from the API
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/books/${id}?populate=*`,
    {
      headers: {
        Authorization: "bearer " + process.env.NEXT_PUBLIC_TOKEN,
      },
    }
  );
  const data = await res.json();
  // Return the props for the page component
  return {
    props: {
      product: data.data.attributes,
    },
  };
};
