import React, { useState } from 'react';

const ScoreTracker = () => {
  const [score, setScore] = useState(80); 
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100 * circumference);

  return (
    <div className="score">
      <svg height="120" width="120" style={{ backgroundColor: 'black' }}>
        <g transform="rotate(-90 60 60)">
          <circle
            stroke="grey" // Changez la couleur de la bordure en gris
            fill="transparent"
            strokeWidth="10"
            strokeDasharray={circumference}
            strokeDashoffset={0}
            r={radius}
            cx="60"
            cy="60"
          />
          <circle
            stroke="white" 
            fill="transparent"
            strokeWidth="10"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            r={radius}
            cx="60"
            cy="60"
          />
        </g>
        <text x="50%" y="50%" textAnchor="middle" fill="#FFFF"  fontSize="2rem" dy=".3em">{score}</text>
      </svg>
    </div>
  );
};

export default ScoreTracker;