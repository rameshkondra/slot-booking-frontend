import React,{createContext,useState} from 'react';

export const BookingContext = createContext();

 export const BookingProvider=({children})=>{
    const [selectedSeats,setSelectedSeats] = useState([]);
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');


    return (
        <BookingContext.Provider 
        value={{
            selectedSeats,
            setSelectedSeats,
            name,
            setName,
            email,
            setEmail
        }} 
        >
            {children}
        </BookingContext.Provider>
    )
    
}