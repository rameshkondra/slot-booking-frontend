import React, { useContext, useEffect, useState } from 'react'
// import { seats } from '../api/Seats'
import './BookSlot.css'
import { BookingContext } from '../context/BookingContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const BookSlot = () => {
    const [seats,setSeats] = useState([]);
    console.log(seats);
    const navigate = useNavigate();

   const {selectedSeats,setSelectedSeats} = useContext(BookingContext);

    console.log(selectedSeats);

    const handleSelectSeat=(seat)=>{

        if(seat.booked) return;

     

        if(selectedSeats.includes(seat.id)){
            setSelectedSeats(selectedSeats.filter((seatId)=> seatId !== seat.id));

        }else {
         setSelectedSeats([...selectedSeats,seat.id]);
        }

     

    }

    useEffect(()=>{

        const getSeatsData= async()=>{

            const data = await axios.get('https://slot-booking-backend-dbyz.onrender.com/api/seats');
            setSeats(data.data);

        }
        getSeatsData();

    },[]);

    const handleContinue=()=>{
        navigate('/user-details');
    }

  return (
    <div className='book-slot-container'>

        <h3>Select seats</h3>

        <div className='screen'>Screen</div>

        <div className='seats-container'>

            {
                seats.map((seat)=>{
                    let className = 'seat-container';

                     if(seat.booked) className = 'booked';
                     else if(selectedSeats.includes(seat.id)) className = 'selected'

                    return (
                        <div key={seat.id} className={className} onClick={()=>handleSelectSeat(seat)}>{seat.id}</div>
                    )
                })
            }
        </div>

        <div className='available-booked-selected-seats-container'>
            <div>
                <div className='available-seat-color'></div>
                <span >Available</span>
            </div>
            <div>
                <div className='selected-seat-color'></div>
                <span>selected</span>
            </div>

            <div>
                <div className='booked-seat-color'></div>
                <span>booked</span>
            </div>

        </div>


        <button className='continue-btn' onClick={handleContinue}>Continue</button>


    

    </div>
  )
}

export default BookSlot