import React from "react";
import "./rightBar.css";

export default function RightBar() {
  return (
    <div className="RightBarContainer">
      <div className="topInfo">
        <img src="/assets/stats/gift.png"  alt="love" className="gift" />
        <span>
          <b>Daelo Namaumbo</b> and <b>other 3 friends</b> have birthdays
          tomorow
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
            <img src="/assets/Profiles/1.jpg" alt="Enock"  className='friendImage' />
            <span className="onlineDot">{" "}</span>
            </div>
            <span className="avatarText">Sam Tinted</span>
            </li>
            <li className="friends">
            <div className="holder">
            <img src="/assets/Profiles/7.jpg" alt="Enock"  className='friendImage' />
            <span className="onlineDot">{" "}</span>
            </div>
            <span className="avatarText">Sam Tinted</span>
            </li>
            <li className="friends">
            <div className="holder">
            <img src="/assets/Profiles/2.jpg" alt="Enock"  className='friendImage' />
            <span className="onlineDot">{" "}</span>
            </div>
            <span className="avatarText">Sam Tinted</span>
            </li>
            <li className="friends">
            <div className="holder">
            <img src="/assets/Profiles/3.jpg" alt="Enock"  className='friendImage' />
            <span className="onlineDot">{" "}</span>
            </div>
            <span className="avatarText">Sam Tinted</span>
            </li>
          </ul>
      </div>
    </div>
  );
}
