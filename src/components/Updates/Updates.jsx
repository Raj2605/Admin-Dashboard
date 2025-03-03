import React from 'react';
import './Updates.css';
import { UpdatesData } from '../../Data/Data';

const Updates = () => {
  return (
    <div className="Updates"> {/* ✅ Fixed class name */}
      {UpdatesData.map((update, index) => (
        <div key={index} className="update"> 
          <img src={update.img} alt="update" />
          <div className="noti">
            <div className="name"><span>{update.name}</span></div> {/* ✅ Wrapped name in div */}
            <div className="message"><span>{update.noti}</span></div> {/* ✅ Wrapped message in div */}
            <div className="time"><span>{update.time}</span></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Updates;
