"use client";

import React, { useState } from 'react';
import '@/components/Sidebar/Sidebar.css';
import { curses } from "@/components/Sidebar/Sidebar.js";
import BtnSidebar from '@/components/Sidebar/btnSideBar/BtnSidebar';

export default function Sidebar( {isSidebarVisible}) {
  const [CurseisVisible, setCurseIsVisible] = useState(false);

  const toggleCoursePortfolio = () => {
    setCurseIsVisible((prev) => !prev);
  };

  return (
    <>
      <div className={`sidebar ${isSidebarVisible? 'visible':'hidden'}`}>

        <div className="sidebarList">


        <BtnSidebar span="Home" i="bx bx-home" />
        <BtnSidebar span="Calendar" i="bx bx-calendar" />
        <BtnSidebar span="Dashboard" i="bx bxs-dashboard" />


          <div>
            <div className="displayBar" onClick={toggleCoursePortfolio}>
            <BtnSidebar span="Your Curses" i={`bx ${CurseisVisible ? 'bx-chevron-up' : 'bx-chevron-down'}`} />

            </div>
          
            <div className={`coursePortfolio ${CurseisVisible ? 'show' : 'vanish'}`}>
              <div className="allPendingTask"><span>Pending task</span></div>
              <div className="courseList">
                {curses.map((curse) => (
                  <div key={curse.id} className="course">
                    <a >{curse.title}</a>
                  </div>
                ))}
              </div>
            </div>

          </div>
            <BtnSidebar span="Join Course" i="bx bx-plus" />
            <BtnSidebar span="Create Course" i="bx bx-plus" />
            <BtnSidebar span="Settings" i="bx bx-cog" />


        </div>
      </div>
    </>
  );
}
