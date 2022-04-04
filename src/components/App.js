import { Routes, Route } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <div className="">
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
