import React from 'react'
import './sidebar.css'

export default function Sidebar() {
  return (
    <>
    <div className="sidebar">
        <div className="sidebarTitle">EduHub</div>
        <div className="sidebarList">

            <div className="sidebarItem"><a href="/">Home</a></div>
            <div className="sidebarItem"><a href="">Calendar</a></div>
            <div className="sidebarItem"><a href="/login">Login</a></div>
            <div className="sidebarItem"><a href="">Dashboard</a></div>
            <div className="sidebarItem"><a href="">Your Courses</a></div>

            <div className="coursePortfolio">
              <div className="allPendingTask"><a href="">Pending task</a></div>
                <div className="courseList">
                      <div>
                      <div className="course"><a href="">First Course</a></div>
                      <div className="course"><a href="">Second Course</a></div>
                      <div className="course"><a href="">Second Course</a></div>
                      <div className="course"><a href="">Second Course</a></div>
                    </div>
                </div>
            </div>
            <div className="sidebarItem"><a href="">Join Course</a></div>
            <div className="sidebarItem"><a href="">Create Course</a></div>
            <div className="settings"><a href="">Settings</a></div>
        </div>
    </div>
    </>
  )
}