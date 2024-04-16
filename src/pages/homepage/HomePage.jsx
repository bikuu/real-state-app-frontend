import React from "react";
import "./HomePage.scss";
import SearchBar from "./../../components/searchBar/SearchBar";
export const HomePage = () => {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">
            Find The Best Real Estate With Peaceful Environment
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            facilis et architecto autem illo praesentium consequuntur, sit id,
            vero ipsum obcaecati. Ipsa praesentium libero eveniet ducimus minus
            impedit exercitationem aperiam laborum fugiat magni quia cumque,
            earum veniam debitis provident similique id magnam harum unde
            assumenda quis necessitatibus.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>10+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>100+</h1>
              <h2>Property Sold</h2>
            </div>
            <div className="box">
              <h1>1000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/realstatebg.png" alt="" />
      </div>
    </div>
  );
};
