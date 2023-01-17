import React from 'react'
import './TopBar.css'
import {Message, Notifications, Person, Search} from "@material-ui/icons"


export default function TopBar() {
  return (
    <div className='topBarContainer'>
      <div className="topBarLeft">
        <span className="logo">D-Social</span></div>
      <div className="topBarMiddle">
        <div className="searchBar">
          <div className="searchInput">
          <Search/>
        <input placeholder='Search videos,Images' className='search'/>          
          </div>
           </div>
           <span className="links">HomePage</span>
           <span className="links">Time Line</span>
      </div>
      <div className="topBarRight">
        <Person />
        <Message/>
        <Notifications/>
       <div className="profile">
       <img src="/assets/Profiles/6.jpg" alt="eno" className='profilePic' />
       </div>
      </div>
          </div>
  )
}
