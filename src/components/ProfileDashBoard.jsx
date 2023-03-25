import React, { useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContest } from "../contextApi/contextApi";
import DashboardBottom from "./DashboardBottom";
import DashboardLeft from "./DashboardLeft";
import DashboardRightTop from "./DashboardRightTop";
import "./profileDashboard.css"

export default function ProfileDashboard() {
    const { profileData, getFilterData, setShowProfile, showProfile } =
    useContext(AppContest); // getting data from contest api
  const { id } = useParams();
  sessionStorage.setItem("id", id);

  // ------------ fetching data with param id---------
  useEffect(() => {
    let ID = sessionStorage.getItem("id") || 1;
    getFilterData(ID);
  }, [id]);

  return (
    <div>
      <div className="dashboard-container">
        {/* ------------dashboard-left---------- */}
        <DashboardLeft />
        {/* ----------- dashboard-right -------------*/}
        {profileData &&
          profileData.map((el) => (
            <div
              style={{ width: "80%" }}
              className='dashboard-right'
              key={el.id}
            >
              {/* ---------- dashboard- right -top------ */}
              <div className="dashboard-right-top" >
                <h2>Profile</h2>
                <DashboardRightTop />
              </div>

              <hr />
              {/* ------------- dashboard-right- bottom------------- */}
              <div onClick={() => setShowProfile(false)}>
                <DashboardBottom {...el} />
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
