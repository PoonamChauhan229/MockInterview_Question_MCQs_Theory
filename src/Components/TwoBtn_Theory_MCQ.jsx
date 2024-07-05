import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';


const TwoBtn_Theory_MCQ = () => {
    
    const navigate=useNavigate()
    const location = useLocation();
    const id = location.state;
    console.log(id)
    const handleStartMock = async () => {
    try {
      const response = await fetch(`./MCQsQuestion/mcqsData${id}.json`);    
      const data = await response.json();     
      console.log(data) 
      navigate('/mcq', { state: data }); // Pass data directly to navigate
    } catch (error) {
      console.log('Error loading JSON:', error);
    }
  };
    return (
        <div>
            <div class="card-group ms-3 mb-3 d-flex justify-content-center">
                <button 
                onClick={handleStartMock}
                class="btn text-white px-5 py-2 mx-2 " type="button" style={{ backgroundColor: "#33028a" }}>
                    MCQ Questions
                </button>

                <button class="btn text-white px-5 py-2 mx-2" type="button" style={{ backgroundColor: "#33028a" }}>
                    Theory Questions
                </button>

                
            </div>

        </div>
    )
}

export default TwoBtn_Theory_MCQ
