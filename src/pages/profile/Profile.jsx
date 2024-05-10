import React from "react";
import "./profilePage.scss";
import { FaUser } from "react-icons/fa";
import List from "../../components/list/List";
import Chat from "../../components/chat/Chat";
import { apiRequest } from "./../../lib/apiRequest";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const res = apiRequest.post("/auth/logout");
      localStorage.removeItem("user");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return ( 
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:
              <FaUser className="imgIcon" />
            </span>
            <span>
              Username: <b>Bibek Lama</b>
            </span>
            <span>
              Email: <b>biku@gmail.com</b>
            </span>
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default Profile;
