import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./dashboardLeft.css"


export default function DashboardLeft() {
    const [id, setId] = useState("1");

    useEffect(() => {
      setId(sessionStorage.getItem("id") || 1);
    }, []);
  
    return (
      <div className="dash-l-container">
        <NavLink
          to={`/homepage/${id}`}
          className={({ isActive }) =>
            isActive ? "active": "notactive"
          }
        >
          <p>Profile</p>
        </NavLink>
  
        <hr />
        
        <NavLink
          to="/post"
          className={({ isActive }) =>
            isActive ? "active" : "notActive"
          }
        >
          <p>Posts</p>
        </NavLink>
       
        <hr />
       
        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            isActive ? "active" : "notActive"
          }
        >
          <p>Gallery</p>
        </NavLink>
       
        <hr />
      
        <NavLink
          to="/todo"
          className={({ isActive }) =>
            isActive ? "active" : "notActive"
          }
        >
          <p>ToDo</p>
        </NavLink>
      </div>
    )
}
