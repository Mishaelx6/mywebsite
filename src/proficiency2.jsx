import React, { useState, useEffect } from 'react';
import './JavaScriptProficiency.css';
import htmlImage from './assets/html.png';

function HtmlProficiency() {
  const [progress, setProgress] = useState(0);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Update the progress and counter values using intervals
    const progressInterval = setInterval(() => {
      if (progress < 85) {
        setProgress(progress + 1);
      }
    }, 20);

    const counterInterval = setInterval(() => {
      if (counter < 85) {
        setCounter(counter + 1);
      }
    }, 20);

    // Clear intervals when component unmounts
    return () => {
      clearInterval(progressInterval);
      clearInterval(counterInterval);
    };
  }, [progress, counter]);

  return (
    <div className="js-proficiency-section">
      <img src={htmlImage} alt="JavaScript" className="js-image" />
      <div className="progress-bar">
        <div className="progress2" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="counter">{counter}%</div>
    </div>
  );
}

export default HtmlProficiency;
