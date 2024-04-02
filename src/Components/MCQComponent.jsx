import React, { useState } from 'react';
import mcqsData from '../Components/utilis/mcqsData.json'; // Import the JSON file

function MCQComponent({scores,setScores}) {
  // State to store selected answers
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false); // State to track submission

  // Function to handle selecting an answer
  const handleSelectAnswer = (questionIndex, optionIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: optionIndex
    });
  };

  // Function to calculate scores
  const calculateScores = () => {
    let score = 0;
    mcqsData.forEach((mcq, questionIndex) => {
      const correctAnswerIndex = mcq.options.findIndex(option => option === mcq.correctAnswer);
      if (selectedAnswers[questionIndex] === correctAnswerIndex) {
        score++;
      }
    });
    setScores(score);
    setSubmitted(true); // Set submitted to true after calculation
  };

  const middleIndex = Math.ceil(mcqsData.length / 2);

  return (
    <div className='container'>
      <div className='row mx-5'>
        <div className='col-md-6'>
          {mcqsData.slice(0, middleIndex).map((mcq, questionIndex) => (
            <div key={questionIndex}>
              <p className="fw-bold bg-light my-1 p-3 text-center">🌎{mcq.question}</p>
              <div className='d-flex flex-wrap'>
                {mcq.options.map((option, optionIndex) => (
                  <div className={`form-check border border-2 rounded py-2 px-3 mx-2 ${submitted && optionIndex === mcq.options.findIndex(option => option === mcq.correctAnswer) ? 'custom-bg-success' : ''}`} style={{ width: "45%" }} key={optionIndex}>
                    <input className="form-check-input border border-2" type="checkbox" id={`question_${questionIndex}_option_${optionIndex}`}
                      name={`question_${questionIndex}`}
                      value={optionIndex}
                      checked={selectedAnswers[questionIndex] === optionIndex}
                      onChange={() => handleSelectAnswer(questionIndex, optionIndex)}
                      disabled={submitted} // Disable checkboxes after submission
                    />
                    <label className="form-check-label" htmlFor={`question_${questionIndex}_option_${optionIndex}`}>
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className='col-md-6'>
          {mcqsData.slice(middleIndex).map((mcq, questionIndex) => (
            <div key={questionIndex + middleIndex}>
              <p className="fw-bold bg-light my-1 p-3 text-center">🌎{mcq.question}</p>
              <div className='d-flex flex-wrap'>
                {mcq.options.map((option, optionIndex) => (
                  <div className={`form-check border border-2 rounded py-2 px-3 mx-2 ${submitted && optionIndex === mcq.options.findIndex(option => option === mcq.correctAnswer) ? 'custom-bg-success' : ''}`} style={{ width: "45%" }} key={optionIndex}>
                    <input className="form-check-input border border-2" type="checkbox" id={`question_${questionIndex}_option_${optionIndex}`}
                      name={`question_${questionIndex + middleIndex}`}
                      value={optionIndex}
                      checked={selectedAnswers[questionIndex + middleIndex] === optionIndex}
                      onChange={() => handleSelectAnswer(questionIndex + middleIndex, optionIndex)}
                      disabled={submitted} // Disable checkboxes after submission
                    />
                    <label className="form-check-label" htmlFor={`question_${questionIndex + middleIndex}_option_${optionIndex}`}>
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='text-center mt-3'>
        <button className="btn btn-submit" onClick={calculateScores} disabled={submitted}>Submit</button>
      </div>
    </div>
  );
}

export default MCQComponent;
