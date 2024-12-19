"use client";
import React, { useState, useEffect } from "react";
import "@/components/navbar/Navbar.css";
import Sidebar from "@/components/Sidebar/Sidebar.jsx";

export default function Navbar() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isProfileMenuVisible, setIsProfileMenuVisible] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('oscuro');

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuVisible((prev) => !prev);
  };

  const closeProfileMenu = (e) => {
    if (!e.target.closest(".profileContainer")) {
      setIsProfileMenuVisible(false);
    }
  };

  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
    // Aquí puedes añadir la lógica para cambiar el tema
    console.log(`Cambiando tema a: ${theme}`);
  };

  useEffect(() => {
    document.addEventListener("click", closeProfileMenu);
    return () => {
      document.removeEventListener("click", closeProfileMenu);
    };
  }, []);

  return (
    <>
      <div className="eduhubNavbar">
        <div className="navbarLeft">
          <button
            onClick={toggleSidebar}
            id="sidebarToggle"
            className="sidebarToggle"
          >
            <span>☰</span>
          </button>
          <div className="appLogo">Eduhub</div>
        </div>

        <div className="navbarRight">
          <div className="profileContainer">
            <img
              src="/components/navbar/img/gatito.jpg"
              className="profilePhoto"
              onClick={toggleProfileMenu}
            />
            {isProfileMenuVisible && (
              <div className="profileMenu">
                <div className="menuItem">Perfil</div>
                <div className="menuItem themeMenuItem">
                  Tema
                  <div className="themeSubmenu">
                    <div 
                      className="themeOption"
                      onClick={() => handleThemeChange('oscuro')}
                    >
                      Oscuro
                    </div>
                    <div 
                      className="themeOption"
                      onClick={() => handleThemeChange('claro')}
                    >
                      Claro
                    </div>
                  </div>
                </div>
                <div className="menuItem">Cerrar sesión</div>
              </div>
            )}
          </div>
        </div>
        <Sidebar isSidebarVisible={!isSidebarVisible} />
      </div>
    </>
  );
}