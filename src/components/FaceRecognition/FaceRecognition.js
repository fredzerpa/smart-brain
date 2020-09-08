import React from 'react';
import BoundingBox from '../BoundingBox/BoundingBox';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, boxes }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto' />
        {boxes.map((box, i) => (
          <BoundingBox box={box} key={i}/>
        ))}
      </div>
    </div>
  );
};

export default FaceRecognition;
