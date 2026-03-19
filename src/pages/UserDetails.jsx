import React,{useContext} from 'react'
import './UserDetails.css';
import { BookingContext } from '../context/BookingContext';
import { toast } from 'react-super-toastify';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';


const UserDetails = () => {
    const navigate = useNavigate();
    const {selectedSeats,setSelectedSeats,name,setName,email,setEmail} = useContext(BookingContext);

    const handleUserDetails= async (e)=>{
        e.preventDefault();

        if(!selectedSeats || selectedSeats.length === 0){
            toast.error('please select seats',{
                position:'top-center'
            });
        }

        if(!name || !email){
            toast.error('please enter details',{position:'top-center'})
        }

        // const bookingData = {
        //     name,
        //     email,
        //     seats:selectedSeats
        // }

        const res = await axios.post('http://localhost:5000/api/book-seats',{
            name,
            email,
            seats: selectedSeats,
        });

        console.log(res.data);

        toast.success('seats booked successfully',{position:'top-center'})
        // console.log('Booking Details :', bookingData);
        setName('');
        setEmail('');
        setSelectedSeats([]);
       

        navigate('/');

    }
  return (
    <div className='user-details-container'>

        <h2>Seats and user details</h2>


        <div>
            
            <h3>Selected Seats :{selectedSeats.join(",")} </h3>
        
        </div>

        <div>
            <form className='form-container' onSubmit={handleUserDetails}>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Name' required/>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder='Enter email' required/>
                <button type='submit'>Book Seats</button>
            </form>
        </div>
    </div>
  )
}

export default UserDetails