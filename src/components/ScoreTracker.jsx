import React, { useState } from 'react';

const ScoreTracker = ({score, size}) => {
  let height, width, radius, cy, fontSize, textColor, strokeWidth;
  switch(size) {
    case 'small':
      height = 55;
      width = 120;
      radius = 22.5;
      cy = 27.5;
      fontSize = "2rem";
      textColor = "#000";
      strokeWidth = "2";
      break;
    case 'medium':
      height = 63;
      width = 120;
      radius = 31.5;
      cy = 31.5;
      fontSize = "2.5rem";
      textColor = "#000";
      strokeWidth = "2";
      break;
    case 'large':
      height = 125;
      width = 125;
      radius = 59;
      cy = 62.5;
      fontSize = "3.5rem";
      textColor = "#fff";
      strokeWidth = "5";
      break;
    default:
      height = 55;
      width = 120;
      radius = 22.5;
      cy = 27.5;
      fontSize = "2rem";
      textColor = "#000";
      strokeWidth = "2";
  }
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100 * circumference);

  return (
    <div className="score" >
      <svg height={height} width={width} >
        <g transform={`rotate(-90 ${width/2} ${cy})`}> 
          <circle
            stroke="grey"
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={0}
            r={radius}
            cx={width/2}
            cy={cy}
          />
          <circle
            stroke="white" 
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            r={radius}
            cx={width/2}
            cy={cy}
          />
        </g>
        <text x="50%" y="50%" textAnchor="middle" fill={textColor}  fontSize={fontSize} dy=".3em">{score}</text>
      </svg>
    </div>
  );
};

export default ScoreTracker;