import "./App.css";
import Header from "./components/Header";

import RecommendedVideos from "./components/RecommendedVideos";
import Sidebar from "./components/Sidebar";
import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import DismissAlert from "./components/DismissAlert";

function App(props) {
  const [mode, setMode] = useState("light");
  // const [alert, setAlert] = useState(null);
  // const showAlert = (message, type) => {
  //   setAlert({
  //     msg: message,
  //     type: type,
  //   });
  //   setTimeout(() => {
  //     setAlert(null);
  //   }, 1000);
  // };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white ";
      document.getElementById('hedar_top').style.zIndex= 1;
      document.getElementById('header_top').style.color="black";
      
      // showAlert("Dark Mode has been Enabled", "success");
      document.title = "YouTubeClone-Dark mode";
      // setInterval(() => {
      //   document.title = 'TextUtils is amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils now'
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      // showAlert("Light Mode has been Enabled", "success");
      document.title = "YouTubeClone";
    }

     
   };

  return (
    <div className="app">
      <Router>
        <Header mode={mode} toggleMode={toggleMode}/>
        
        <Routes>
          <Route
            path="/search/:searchTerm"
            element={
              <div className="app_page">
                <Sidebar mode={mode} toggleMode={toggleMode} />
                <SearchPage mode={mode} toggleMode={toggleMode} />
              </div>
            }
          />
          <Route
            path="/"
            element={
              <div className="app_page">
                <Sidebar mode={mode} toggleMode={toggleMode} />
                <RecommendedVideos mode={mode} toggleMode={toggleMode} />
              </div>
            }
          />
        </Routes>
      </Router>

      {/* header */}
      {/* sidebar */}
      {/* recommended vide */}
    </div>
  );
}

export default App;
