import React, { useState } from "react";
import "./slider.scss";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
const Slider = ({ images }) => {
  const [imagegIndex, setImagegIndex] = useState(null);
  const changeSlide = (direction) => {
    direction === "left"
      ? imagegIndex === 0
        ? setImagegIndex(images.length - 1)
        : setImagegIndex(imagegIndex - 1)
      : imagegIndex === images.length - 1
      ? setImagegIndex(0)
      : setImagegIndex(imagegIndex + 1);
  };
  return (
    <div className="slider">
      {imagegIndex !== null && (
        <div className="fullSlider">
          <div className="arrow" onClick={() => changeSlide("left")}>
            <FaAngleLeft className="imgIcon" />
          </div>
          <div className="imgContainer">
            <img src={images[imagegIndex]} alt="" />
          </div>
          <div className="arrow" onClick={() => changeSlide("right")}>
            <FaAngleRight className="imgIcon" />
          </div>
          <div className="close" onClick={() => setImagegIndex(null)}>
            X
          </div>
        </div>
      )}
      <div className="bigImg">
        <img src={images[0]} alt="" onClick={() => setImagegIndex(0)} />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            alt=""
            key={index}
            onClick={() => setImagegIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
