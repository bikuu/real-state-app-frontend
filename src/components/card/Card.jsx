import React from "react";
import "./card.scss";
import { Link } from "react-router-dom";
import {
  FaBath,
  FaBed,
  FaMapMarkerAlt,
  FaRegBookmark,
  FaRegCommentDots,
} from "react-icons/fa";
const Card = ({ item }) => {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.img} alt="Image" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <FaMapMarkerAlt className="imgIcon" />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>

        <div className="bottom">
          <div className="features">
            <div className="feature">
              <FaBed className="imgIcon" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <FaBath className="imgIcon" />

              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <FaRegBookmark className="imgIcon" />
            </div>
            <div className="icon">
              {" "}
              <FaRegCommentDots className="imgIcon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
