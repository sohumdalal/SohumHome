'use client'
import React from 'react';

const Header = () => {
  return (
    <div className="carousel">
      <div className="myName">Sohum Dalal.</div>
      <div className = "subTitle">
        <div className="engineerPlus">engineer +</div>
        <div className="change_outer">
          <div className="change_inner">
            <div className="element">craftsman</div>
            <div className="element">chef</div>
            <div className="element">baker</div>
            <div className="element">barista</div>
            <div className="element">farmer</div>
            <div className="element">craftsman</div> {/* Repeat first element */}
          </div>
        </div>
      </div>

    </div>
  );
}

export default Header;