import React from 'react';
import '@/components/Sidebar/btnSideBar/BtnSidebar.css';

export default function BtnSidebar({ span, i }) {
  return (
    <div className="sidebarItem">
      <span>{span}</span>
      <i className={i}></i>
    </div>
  );
}
