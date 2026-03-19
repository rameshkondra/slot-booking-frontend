import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate();



    const handleBookSlot=()=>{
        navigate('/book-slot');
    }
  return (
    <div className='home-container'>
        
        <button onClick={handleBookSlot}>Book Slots</button>
        <button onClick={()=>navigate('/booked-slots')}> View Booked Slots</button>

    </div>
  )
}

export default Home