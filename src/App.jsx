import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import RoadMap_Modules_Topics from './Components/RoadMap_Modules_Topics'
import MCQComponent from './Components/MCQComponent'
import { Route ,Routes} from 'react-router-dom'
import Header from './Components/Header'
import RoadMapCard from './Components/RoadMapCard'
import TwoBtn_Theory_MCQ from './Components/TwoBtn_Theory_MCQ'

function App() {
  const [scores,setScores]=useState()

  return (
    <>
      <Navbar scores={scores} setScores={setScores} />
      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path='/roadmap' element={<RoadMap_Modules_Topics/>}/>
        <Route path='/theory_mcq' element={<TwoBtn_Theory_MCQ/>}/>
        <Route path ='/mcq' element={<MCQComponent scores={scores} setScores={setScores}/>}/>
      </Routes>
    </>
  )
}

export default App
