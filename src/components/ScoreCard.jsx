import React from 'react';
import ScoreTracker from '../components/ScoreTracker';

const ScoreCard = () => {
    return (
        <div className="card-score" >
          <ScoreTracker />
          <h1 className='card-score__title'>Score de transport</h1>
          <img src='/img/icon-truckCamion.svg' className='card-score__img'></img>
        </div>
    )
}
export default ScoreCard;