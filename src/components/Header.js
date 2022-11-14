import React, { useState } from "react";
import "../Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Form from "react-bootstrap/Form";
import { Button, ButtonGroup } from "react-bootstrap";

import Youtube from "../YouTube-Logo.wine.svg";
import { Link } from "react-router-dom";

const Header = ({ toggleMode, mode }) => {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div
      className="header"
      id="hedar_top"
      style={{
        backgroundColor: mode === "dark" ? "Black" : "white",
        Zindex: "100",
      }}
    >
      <div className="header_left">
        <MenuIcon />
        <Link to="/">
          <img src={Youtube} className="header_logo" alt="Youtube" />
        </Link>
      </div>

      <div className="header_input">
        <input
          type="text"
          value={inputSearch}
          placeholder="Search"
          name=""
          id=""
          onChange={(e) => {
            setInputSearch(e.target.value);
          }}
        />

        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header_inputbtn" />
        </Link>
      </div>

      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
          onClick={toggleMode}
        />
        <label className="form-check-label" for="flexSwitchCheckDefault">
          Dark theme
        </label>
      </div>

      <div className="header_icons">
        <VideoCallIcon className="header_icon" />
        <AppsIcon className="header_icon" />

        <NotificationsIcon className="header_icon" />

        <img
          src="https://www.w3schools.com/w3images/avatar2.png"
          className="header_avatar"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
