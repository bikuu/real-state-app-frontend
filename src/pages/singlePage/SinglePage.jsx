import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import Map from "./../../components/map/Map";
import { redirect, useLoaderData } from "react-router-dom";
import DOMPurify from "dompurify";
import {
  FaBath,
  FaBed,
  FaBus,
  FaCommentDots,
  FaCompress,
  FaDog,
  FaDollarSign,
  FaHamburger,
  FaMapMarkerAlt,
  FaRegBookmark,
  FaSchool,
  FaTools,
} from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "./../../context/AuthContext";
import { apiRequest } from "./../../lib/apiRequest";

const SinglePage = () => {
  const { currentUser } = useContext(AuthContext);
  const post = useLoaderData();
  const [saved, setSaved] = useState(post.isSaved);
  const handleSave = async () => {
    if (!currentUser) {
      redirect("/login");
    }
    try {
      await apiRequest.post("/users/save", {
        postId: post.id,
      });
      setSaved((prev) => !prev);
    } catch (error) {
      console.log(error);
      setSaved((prev) => !prev);
    }
  };
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={post.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{post.title}</h1>
                <div className="address">
                  <FaMapMarkerAlt className="imgIcon" />
                  <span>{post.address}</span>
                </div>
                <div className="price">$ {post.price}</div>
              </div>
              <div className="user">
                <img src={post.user.avatar} alt="" />
                <span>{post.user.username}</span>
              </div>
            </div>
            <div
              className="bottom"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(post.postDetail.desc),
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <FaTools className="imgIcon" />
              <div className="featureText">
                <span>Utilities</span>
                {post.postDetail.utilities === "owner" ? (
                  <p>Owner is responsible</p>
                ) : (
                  <p>Renter is responsible</p>
                )}
              </div>
            </div>
            <div className="feature">
              <FaDog className="imgIcon" />
              <div className="featureText">
                <span>Pet Policy</span>
                {post.postDetail.pet === "allowed" ? (
                  <p>Pet Allowed</p>
                ) : (
                  <p>Pet Not Allowed</p>
                )}
              </div>
            </div>
            <div className="feature">
              <FaDollarSign className="imgIcon" />
              <div className="featureText">
                <span>Income Policy</span>
                <p>{post.postDetail.income}</p>
              </div>
            </div>
          </div>

          <p className="title">Room Sizes</p>
          <div className="sizes">
            <div className="size">
              <FaCompress className="imgIcon" />
              <span>{post.postDetail.size} sqft</span>
            </div>
            <div className="size">
              <FaBed className="imgIcon" />
              <span>{post.bedroom} bed</span>
            </div>
            <div className="size">
              <FaBath className="imgIcon" />
              <span>{post.bathroom} bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <FaSchool className="imgIcon" />
              <div className="featureText">
                <span>School</span>
                <p>{post.postDetail.school}m away</p>
              </div>
            </div>
            <div className="feature">
              <FaBus className="imgIcon" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>{post.postDetail.bus}m away</p>
              </div>
            </div>
            <div className="feature">
              <FaHamburger className="imgIcon" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>{post.postDetail.restaurant}m away</p>
              </div>
            </div>
          </div>
          <p className="tittle">Location</p>
          <div className="mapContainer">
            <Map items={[post]} />
          </div>
          <div className="buttons">
            <button>
              <FaCommentDots className="imgIcon" /> Send a message
            </button>
            <button onClick={handleSave}>
              <FaRegBookmark className="imgIcon" />{" "}
              {saved ? "Place saved" : "Save a place"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
