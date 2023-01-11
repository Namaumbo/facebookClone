import React from 'react'
import './sideBar.css'
import{ Bookmark, Event, Group, Home, School, VideoCallRounded, Wifi, Work } from '@material-ui/icons'
import { Button } from '@material-ui/core'
// import fs from './1.jpg'



export default function SideBar() {
  return (
    <div className='sideBarContainer'>
      <div className="sideBarItems">
    <ul className="sideBarList">
      <li className="itemList">
      <Home/>
      <span className="sideBarItemText">
        Home
      </span>
      </li>

      <li className="itemList">
      <Wifi/>
      <span className="sideBarItemText">
        Feeds
      </span>
      </li>
     
      <li className="itemList">
      <VideoCallRounded/>
      <span className="sideBarItemText">
        Videos
      </span>
      </li>
     
      <li className="itemList">
      <Group/>
      <span className="sideBarItemText">
        Groups
      </span>
      </li>
     
      <li className="itemList">
      <Bookmark/>
      <span className="sideBarItemText">
        Bookmarks
      </span>
      </li>
     
      <li className="itemList">
      <Work/>
      <span className="sideBarItemText">
        Jobs
      </span>
      </li>
     
      <li className="itemList">
      <Event/>
      <span className="sideBarItemText">
        Events
      </span>
      </li>
     
      <li className="itemList">
      <School/>
      <span className="sideBarItemText">
        Courses
      </span>
      </li>
      </ul>
        
      </div>
      <Button variant='contained' style={{marginLeft:"30px",marginBottom:"10px"}}>Show more</Button>
      <hr />
      <div >
        <ul >
          <li className="friends">
          <img src="/assets/Profiles/1.jpg" alt="Enock"  className='friendImage' />
          <span className="avatarText">Sam Tinted</span>
          </li>
          <li className="friends">
          <img src="/assets/Profiles/2.jpg" alt="Enock" className='friendImage'  />
          <span className="avatarText">Alex Yohah</span>
          </li>
          <li className="friends">
          <img src="/assets/Profiles/6.jpg" alt="Enock" className='friendImage' />
          <span className="avatarText">Enock Chokha</span>
          </li>
          <li className="friends">
          <img src="/assets/Profiles/3.jpg" alt="Enock" className='friendImage' />
          <span className="avatarText">Enock Chokha</span>
          </li>
          <li className="friends">
          <img src="/assets/Profiles/5.jpg" alt="Enock" className='friendImage' />
          <span className="avatarText">Enock Chokha</span>
          </li>
        </ul>
      </div>
    
    </div>
  )
}
