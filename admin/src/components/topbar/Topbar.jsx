import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/userRedux";
export default function Topbar() {
  const dispatch=useDispatch()
  const handleClick=(e)=>{
    e.preventDefault()
    dispatch(logout())
    
  }
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">lamaadmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>  
          <Settings />
          <div className="topbarIconContainer">
            <button className="widgetSmButton" onClick={handleClick}>
              Logout
            </button>
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
