import React, { useState } from "react";
import "./chat.scss";
import { FaUser } from "react-icons/fa";
const Chat = () => {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <FaUser className="imgIcon" />
          <span>Bibek Lama</span>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="message">
          <FaUser className="imgIcon" />
          <span>Bibek Lama</span>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="message">
          <FaUser className="imgIcon" />
          <span>Bibek Lama</span>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="message">
          <FaUser className="imgIcon" />
          <span>Bibek Lama</span>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <FaUser className="imgIcon" />
              Bibek Lama
            </div>
            <span className="close" onClick={() => setChat(null)}>
              X
            </span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni,
                laborum.
              </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni,
                laborum.
              </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni,
                laborum.
              </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni,
                laborum.
              </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni,
                laborum.
              </p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
