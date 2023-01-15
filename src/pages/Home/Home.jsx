import React from 'react'
import Feed from '../../components/Feed/Feed'
import RightBar from '../../components/rightBar/Rightbar'
import SideBar from '../../components/sideBar/SideBar'
import TopBar from '../../components/topBar/TopBar'
import './Home.css'

export default function Home() {
  return (
    <>
     <TopBar/>
     <div className="homeContainer">
     <SideBar/>
     <Feed/>
     
     <RightBar/>
     </div>
     
    </>
   
     
  )
}
