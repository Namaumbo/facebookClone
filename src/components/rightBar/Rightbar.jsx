import React from "react";
import "./rightBar.css";

export default function Rightbar() {
  return (
    <div className="RightBarContainer">
      <div className="topInfo">
        <img src="/assets/stats/gift.png"  alt="love" className="gift" />
        <span>
          <b>Day doe </b> and <b>other 3 friends</b> have birthdays
          tomorrow.
        </span>
      </div>
      <div className="birthday">
        <img
          src="/assets/birthday.jpg"
          alt="birthday"
          className="birthdayImg"
        />
        <h3 className="birthdayText">Cold and Treaty</h3>
      </div>
      <hr  style={{width:"80%",margin:"auto"}}/>
      <div >
          <ul >
            <li className="friends">
            <div className="holder">
            <img src="/assets/Profiles/1.jpg" alt="Eno"  className='friendImage' />
            <span className="onlineDot">{" "}</span>
            </div>
            <span className="avatarText">Sam Tinted</span>
            </li>
            <li className="friends">
            <div className="holder">
            <img src="/assets/Profiles/7.jpg" alt="Eno"  className='friendImage' />
            <span className="onlineDot">{" "}</span>
            </div>
            <span className="avatarText">Sam Tinted</span>
            </li>
            <li className="friends">
            <div className="holder">
            <img src="/assets/Profiles/2.jpg" alt="Eno"  className='friendImage' />
            <span className="onlineDot">{" "}</span>
            </div>
            <span className="avatarText">Sam Tinted</span>
            </li>
            <li className="friends">
            <div className="holder">
            <img src="/assets/Profiles/3.jpg" alt="Eno"  className='friendImage' />
            <span className="onlineDot">{" "}</span>
            </div>
            <span className="avatarText">Sam Tinted</span>
            </li>
          </ul>
      </div>
    </div>
  );
}
