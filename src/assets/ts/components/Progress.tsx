import * as React from 'react';

const Progress = ({ currentTime, totalTime }) => (
<div>
  <span>{Math.floor(currentTime)}</span>
  <span>{Math.floor(totalTime)}</span>
</div>
)

export default Progress;
