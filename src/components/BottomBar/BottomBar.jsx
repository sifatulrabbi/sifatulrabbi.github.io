import React from 'react';
import { RiHomeFill } from 'react-icons/ri';
import { MdWork, MdMessage, MdPerson } from 'react-icons/md';

const BottomBar = () => {
  return (
    <div className="bottomBar">
      <nav className="bottomBar_nav">
        <div className="bottomBar_nav_link active">
          <RiHomeFill />
        </div>
        <div className="bottomBar_nav_link">
          <MdWork />
        </div>
        <div className="bottomBar_nav_link">
          <MdPerson />
        </div>
        <div className="bottomBar_nav_link">
          <MdMessage />
        </div>
      </nav>
    </div>
  );
};

export default BottomBar;
