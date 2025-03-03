import React from 'react';
import './RightSide.css';
import Updates from '../Updates/Updates';
import StudentReview from '../StudentReview/StudentReview';

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <h3>Updates</h3>
        <Updates/>
        </div>
        <div>
          <h3>Students Review</h3>
          <StudentReview/>
        </div>
    </div>
  )
}

export default RightSide
