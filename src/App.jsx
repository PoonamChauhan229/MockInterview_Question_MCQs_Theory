import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import HomePage from './Components/HomePage'
import MCQComponent from './Components/MCQComponent'
import { Route ,Routes} from 'react-router-dom'

function App() {
  const [scores,setScores]=useState()

  return (
    <>
      <Navbar scores={scores} setScores={setScores} />
      
      <Routes>
      <Route path ='/' element={<HomePage/>}/>
        <Route path ='/mcq' element={<MCQComponent scores={scores} setScores={setScores}/>}/>
      </Routes>
    </>
  )
}

export default App
