import { MoreVert, } from "@material-ui/icons";
import React from "react";
import "./post.css";

export default function Post() {
  return (
    <div className="postContainer">
      <div className="postWrapper">
        <div className="topInfo">
          <div className="userInfo">
            <img
              src="/assets/Profiles/6.jpg"
              alt="Enock"
              className="friendImage"
            />
            <span className="avatarText">Enock Chokha</span>
            <div className="time">32 min ago</div>
          </div>
          <div >
            <MoreVert/>
          </div>
        </div>
        <div className="heading">
            <span>Every Morning is a fresh Start!</span>
        </div>
        <div className="picture">
            <img src="/assets/Profiles/2.jpg" alt="" className="postImg" />
        </div>
        <div className="stats">
            <div className="postBtnLeft">
              <div className="like">
              <img src="/assets/stats/likes.png" alt="like" className="statsBtn"/>
              <span className="likeCounter">28 liked this</span>
              </div>
            <img src="/assets/stats/love.png" alt="love" className="statsBtn" style={{width:"35px",height:"35px"}} />
            </div>
           <span className="commentCount">3 comments</span>
        </div>
      </div>
    </div>
  );
}
