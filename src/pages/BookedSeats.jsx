import React,{useEffect, useState} from 'react'
import './BookedSeats.css';
import axios from 'axios';

const BookedSeats = () => {

    const [booked,setBooked] = useState([]);
    console.log(booked);

    useEffect(()=>{
       const getBookedData =async()=>{

        const res = await axios('http://localhost:5000/api/bookings');
        setBooked(res.data);

       }
       getBookedData();
    },[])
  return (
    <div className='booked-seats-container'>
        <h2>Booked Slots</h2>

        <div>
            <table className='table-container'>
                <thead>
                    <tr>
                        <th>Booking id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Booked Seats</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        booked.map((user)=>{
                            return (
                                <tr key={user._id}>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.seats.join(",")}</td>
                    </tr>
                            )
                        })
                    }
                    
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default BookedSeats