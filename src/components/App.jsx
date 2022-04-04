import {useState} from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import "../input.css";
import Top from "./Top/Top";
function App() {
  return (
    <div className="bg-blue-300">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/top" element={<Top />} />

      </Routes>
    </div>
  );
}

export default App;
