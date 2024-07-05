'use client'
import React, { useState, useEffect } from 'react';

const Header = () => {

  const words = ['fantastic', 'interesting', 'awesome', 'incredible', 'fantastic'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

return (
  <div className="OuterTitle">
    <div id="titleBox">
      <h1 id="biggerTitle">Sohum Dalal. </h1>
      <h2 id="smallerTitle">
        engineer + 
        <span className="wordsToFlip">
          {words.map((word, index) => (
            <span key={index} className={index === currentWordIndex ? 'visible' : 'hidden'}>
              {word}
            </span>
          ))}
        </span>
      </h2>
    </div>
  </div>
);
}

export default Header