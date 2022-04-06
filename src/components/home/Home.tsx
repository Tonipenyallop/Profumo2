import React from "react";
import {useNavigate} from 'react-router-dom'
import Count from "./Count";
import MenuBar from "./MenuBar";
export default function Home() {
  
  const navigate = useNavigate()
  const toHomePage = () => {
    navigate('/')
  }
  return (
    <div className="bg-img">

      <MenuBar/>
      <Count/>
      <div className="flex justify-center items-center">
        <div className="bg-white">
        <img src={require('../../images/applying-cologne.jpeg')} alt="" />
          Profumo is the website you can purchase niche fragrance
          </div>
      </div>
      <button className="button" onClick={toHomePage}>HEHE</button>
    </div>
  );
}
