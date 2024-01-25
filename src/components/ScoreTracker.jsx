import React, { useState } from 'react';

const ScoreTracker = () => {
  const [score, setScore] = useState(80); 
  const radius = 22.5; // Ajustez le rayon proportionnellement à la nouvelle hauteur
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100 * circumference);

  return (
    <div className="score">
      <svg height="55" width="120" >
        <g transform="rotate(-90 60 27.5)"> 
          <circle
            stroke="grey"
            fill="transparent"
            strokeWidth="2"
            strokeDasharray={circumference}
            strokeDashoffset={0}
            r={radius}
            cx="60"
            cy="27.5" // Ajustez les coordonnées du centre du cercle proportionnellement à la nouvelle hauteur
          />
          <circle
            stroke="white" 
            fill="transparent"
            strokeWidth="2"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            r={radius}
            cx="60"
            cy="27.5" // Ajustez les coordonnées du centre du cercle proportionnellement à la nouvelle hauteur
          />
        </g>
        <text x="50%" y="50%" textAnchor="middle" fill="#000"  fontSize="1.5rem" dy=".3em">{score}</text>
      </svg>
    </div>
  );
};

export default ScoreTracker;