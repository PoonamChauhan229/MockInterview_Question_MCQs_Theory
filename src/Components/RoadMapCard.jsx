import React from 'react'
import { useNavigate } from 'react-router-dom';

const RoadMapCard = ({ roadMapDay, imgRoadMap,startMock,setStartMock }) => {
  const navigate=useNavigate()
  const handleStartMock = () => {
    setStartMock(true);
     navigate('/mcq')    
  };
  return (
    <div className='mx-2' style={{ width: "200px" }}>
      <div className='card'>
        <img src={imgRoadMap} class="card-img-top" alt="..." height={70} />
        <div class="card-body px-2 py-1" style={{ margin: 0,padding:0 }}>
          
          <h6 class="card-title font-text" s>{roadMapDay}</h6>
        </div>
        <div class="d-grid gap-2 col-8 mx-auto">
            
            {!startMock && (
        <button onClick={handleStartMock} class="btn text-white" type="button" style={{ backgroundColor: "#33028a" }}>
          Start Mock
        </button>
      )}
          
          </div>
        <div class="card-footer mt-1">          
        </div>
      </div>
    </div>

  )
}

export default RoadMapCard
