
import {Label, PermMedia, Room, TagFaces, } from '@material-ui/icons'
import React from 'react'
import Post from '../../components/Posts/Post'
import './Feed.css'

export default function Feed() {
  return (
    <div className='FeedContainer'>
      <div className="inputContainer">
        <div className="avatar">
        <img src="/assets/Profiles/6.jpg" alt="Enock" className='friendImage' />
        <input className='input' type='text' placeholder='Whats on your mind??'/>
        </div>
        <hr style={{marginBottom:'20px',marginTop:'20px',marginRight:'14px',marginLeft:'14px'  }} /> 
        <div className="mediaContainer">
        <div className="media">
          <div className="mediaItem">
            <PermMedia  style={{color:'#f55742'}}/>
            <span className="mediaText">Photo or Video</span>
          </div>
          <div className="mediaItem">
            <Label style={{color:'blue'}} />
            <span className="mediaText">Tag</span>
          </div>
          <div className="mediaItem">
            <Room style={{color:'#35bf2e'}}/>
            <span className="mediaText">Location</span>
          </div>
          <div className="mediaItem">
            <TagFaces style={{color:"gold"}} />
            <span className="mediaText">Feelings</span>
          </div>
        </div>
        <button className='shareBtn'>Share</button>
        </div>
      </div>
      <Post name='Daelo Namaumbo' profile='/assets/Profiles/4.jpg'/>
      <Post name = 'John Doe' profile='/assets/Profiles/2.jpg'/>
      <Post name = 'Dan Okray' profile='/assets/Profiles/3.jpg' />
    </div>
  )
}
