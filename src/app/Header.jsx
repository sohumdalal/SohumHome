'use client'
import React, { useState, useEffect } from 'react';

const Header = () => {

  const words = ['craftsman', 'baker', 'chef', 'farmer', 'barista'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);


return (
  <div className="OuterTitle">
    <div id="titleBox">
      <h1 id="biggerTitle">Sohum Dalal. </h1>
      <h2 id="smallerTitle">
        engineer + 
        <div className="wordsToFlip">
          {words.map((word, index) => (
            <span key={index} className={index === currentWordIndex ? 'visible' : 'hidden'}>
              {word}
            </span>
          ))}
        </div>
      </h2>
    </div>
  </div>
);
}

export default Header