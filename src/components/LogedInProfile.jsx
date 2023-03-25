import React, { useContext } from "react";
import { AppContest } from '../contextApi/contextApi';
import { Link } from "react-router-dom";
import GetUser from './GetUser';
import "./logedinProfile.css" 
import "./getUser.css"

const LogedInProfile = () =>{
    const { profileData, setShowProfile, showProfile } = useContext(AppContest); // getting data from contest api

    const handleClick = () => {
      setShowProfile(false);
      sessionStorage.clear("id");
    };
  
    return (
      <div
        className="main-container"
        style={{ display: showProfile ? "block" : "none" }}
      >
        <div className="profiles">
          <img src={profileData[0]?.profilepicture} alt="profile" />
          <p>{profileData[0]?.name}</p>
          <p>{profileData[0]?.email}</p>
        </div>
        <hr />
        {/* ------- users profile ---- */}
        <div className="users-profile" onClick={() => setShowProfile(false)}>
          <GetUser/>
        </div>
  
        {/* -------(LogOut)------ */}
        <Link to="/">
          <button onClick={handleClick} className="sign-out-button">
            Sign out
          </button>
        </Link>
      </div>
    );
}
export default LogedInProfile;