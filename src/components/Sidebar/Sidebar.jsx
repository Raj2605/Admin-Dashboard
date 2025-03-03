import React from 'react';
import './Sidebar.css';
import Artanlogo from '../../imgs/Artanlogo.jpg';
import { UilEstate ,UilSignOutAlt } from '@iconscout/react-unicons';
import { SidebarData } from '../../Data/Data'; 
import { useState } from 'react';


const Sidebar = () => {

  const [selected, setSelected] = useState(0);

  return (
    <div className="Sidebar">
      {/* Logo Section */}
      <div className="logo">
        <img src={Artanlogo} alt="Artan Logo" />
        <span className="logo-text">E-learning</span>
      </div>

      {/* Menu Items */}
      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div className={selected===index?'menuItem active': 'menuItem'} key={index}
            onClick={() => setSelected(index)}
            >
              <item.icon />
              <span>{item.heading}</span>
            </div>
          )
        })}
        <div className="menuItem">
          <UilSignOutAlt />
        </div>
      </div>  
    </div>  
  );
}

export default Sidebar;
