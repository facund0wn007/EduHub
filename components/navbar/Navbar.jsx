"use client"
import React,{useState} from 'react';
import '@/components/navbar/Navbar.css';
import Sidebar from "@/components/Sidebar/Sidebar.jsx"

export default function Navbar() {

  const [isSidebarVisible, setIsSidebarVisible] = useState(false); 

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev); // Cambiar el estado de la Sidebar
  };

  return (
    <>
      <div className="eduhubNavbar">
        <div className="navbarLeft">
          <button onClick={toggleSidebar} id="sidebarToggle" className="sidebarToggle">
            <span>☰</span>
          </button>
          <div className="appLogo">Eduhub</div>
        </div>

        <Sidebar isSidebarVisible={isSidebarVisible} />
      </div>

    </>
  );
};

