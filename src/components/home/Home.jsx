import React from "react";
import {useNavigate} from 'react-router-dom'
import MenuBar from "./MenuBar";
export default function Home() {
  const navigate = useNavigate()
  const toHomePage = () => {
    navigate('/')
  }
  return (
    <div className="">

      <MenuBar/>
      <button className="button" onClick={toHomePage}>HEHE</button>
    </div>
  );
}
