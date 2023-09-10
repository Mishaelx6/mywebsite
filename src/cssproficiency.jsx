import React, { useState, useEffect } from 'react';
import "./cssproficiency.css"// Import your CSS file for styling
import cssImage from './assets/css-3.png';

function CSSProficiency() {
  const [progress, setProgress] = useState(0);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      if (progress < 75) {
        setProgress(progress + 1);
      }
    }, 20);

    const counterInterval = setInterval(() => {
      if (counter < 75) {
        setCounter(counter + 1);
      }
    }, 20);

    return () => {
      clearInterval(progressInterval);
      clearInterval(counterInterval);
    };
  }, [progress, counter]);

  return (
    <div className="css-proficiency-section">
      <img src={cssImage} alt="CSS" className="css-image" />
      <div className="progress-container">
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="counter">{counter}%</div>
      </div>
    </div>
  );
}

export default CSSProficiency;
