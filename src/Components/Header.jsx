import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate=useNavigate()
    return (
        <div>
            <div class="card-group ms-3 mb-3 d-flex justify-content-center">
                <button 
                onClick={()=>navigate('/roadmap')}
                class="btn text-white px-5 py-2 mx-2 " type="button" style={{ backgroundColor: "#33028a" }}>
                    RoadMap
                </button>

                <button class="btn text-white px-5 py-2 mx-2" type="button" style={{ backgroundColor: "#33028a" }}>
                    Module
                </button>

                <button class="btn text-white px-5 py-2 mx-2" type="button" style={{ backgroundColor: "#33028a" }}>
                    Languages
                </button>

                <button class="btn text-white px-5 py-2 mx-2" type="button" style={{ backgroundColor: "#33028a" }}>
                    All
                </button>
            </div>

        </div>
    )
}

export default Header
