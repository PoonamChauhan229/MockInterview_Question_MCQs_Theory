import { roadMapDays } from './utilis/RoadMapJson'
import RoadMapCard from './RoadMapCard'
import React, { useState } from 'react';
import MCQComponent from './MCQComponent';

const HomePage = () => {
  const [startMock, setStartMock] = useState(false);

 

  return (
    <div>
      <div class="card-group mx-2">
        {roadMapDays.map((element, index) => <RoadMapCard {...element} key={index} startMock={startMock}
        setStartMock={setStartMock}
        
        />)}
      </div>

     

      {/* Button to start the mock */}
      
    </div>
  );
}

export default HomePage;