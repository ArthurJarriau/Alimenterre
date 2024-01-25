import React from 'react';
import ScoreTracker from '../components/ScoreTracker';

const ScoreCard = ({ score, title, svg , color}) => {
  
    return (
        <div className="card-score" style={{ backgroundColor: color }}>
          <ScoreTracker score={score} size={'small'}/>
          <h1 className='card-score__title'>{title}</h1>
          <img src={`/img/icon-${svg}.svg`} className='card-score__img'></img>
        </div>
    )
}
export default ScoreCard;