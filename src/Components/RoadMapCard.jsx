import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import data from '../../public/data.json'

const RoadMapCard = ({ roadMapDay, id }) => {
  const navigate = useNavigate();

   return (
    <>
      <div className="card mx-5" onClick={()=>navigate('/theory_mcq',{state:id})}>
        <div className="card-body">
          {roadMapDay}
        </div>
      </div>
    </>
  );
};

export default RoadMapCard;
