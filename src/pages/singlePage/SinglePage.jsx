import React from "react";
import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import Map from "./../../components/map/Map";

import { singlePostData, userData } from "../../lib/dummyData";
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

const SinglePage = () => {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <FaMapMarkerAlt className="imgIcon" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">$ {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
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
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
                <FaDog className="imgIcon" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pet Allowed</p>
              </div>
            </div>
            <div className="feature">
                <FaDollarSign className="imgIcon" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>

          <p className="title">Room Sizes</p>
          <div className="sizes">
            <div className="size">
              <FaCompress className="imgIcon" />
              <span>130 sqft</span>
            </div>
            <div className="size">
              <FaBed className="imgIcon" />
              <span>3 bed</span>
            </div>
            <div className="size">
              <FaBath className="imgIcon" />
              <span>3 bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
                <FaSchool className="imgIcon" />
              <div className="featureText">
                <span>School</span>
                <p>200m away</p>
              </div>
            </div>
            <div className="feature">
              <FaBus className="imgIcon" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
                <FaHamburger className="imgIcon" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>50m away</p>
              </div>
            </div>
          </div>
          <p className="tittle">Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <FaCommentDots className="imgIcon" /> Send a message
            </button>
            <button>
              <FaRegBookmark className="imgIcon" /> Save a place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
