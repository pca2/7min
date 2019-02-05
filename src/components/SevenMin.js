import React from 'react';
import Exercise from './Exercise';
import Timer from './Timer';

const SevenMin = () => (
  <div className="SevenMin">
    <Exercise name="Sit-ups" />
    <Timer time={30} />
  </div>
);


export default SevenMin;
