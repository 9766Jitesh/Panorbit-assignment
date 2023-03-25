
import React, { useContext, useEffect } from "react";
import { AppContest } from "../contextApi/contextApi"
import "./dashboardRightTop.css"

export default function DashboardRightTop() {
    const { profileData, setShowProfile, showProfile, getFilterData } =
    useContext(AppContest); // getting data from contest api

  // ------------ (fetching data with param id)---------
  useEffect(() => {
    const ID = sessionStorage.getItem("id") || 1;
    getFilterData(Number(ID));
  }, []);

  return (
    <div>
      <div
        onClick={() => setShowProfile(!showProfile)}
        className="profile"
      >
        <img src={profileData[0]?.profilepicture} alt="profile img" />
        <p>{profileData[0]?.name}</p>
      </div>
      {/* -------- (Profile details component)----- */}
      {/* <ProfileDetails /> */}
    </div>
  );
}
