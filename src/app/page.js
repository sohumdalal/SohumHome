'use client'
import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import Header from './Header';
import ContentContainer from './ContentContainer';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <main className={styles.main}>
      <Header  />
      <ContentContainer toggleDarkMode={toggleDarkMode}/>
    </main>
  );
}
