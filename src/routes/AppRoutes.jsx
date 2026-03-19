import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import BookSlot from '../pages/BookSlot'
import UserDetails from '../pages/UserDetails'
import BookedSeats from '../pages/BookedSeats'

const AppRoutes = () => {
  return (
    <div>

        <BrowserRouter>
        <Routes>
           
           <Route path='/' element={<Home/>}></Route>
           <Route path='/book-slot' element={<BookSlot/>}></Route>
           <Route path='/user-details' element={<UserDetails/>}></Route>
           <Route path='/booked-slots' element={<BookedSeats/>}></Route>

        </Routes>
        
        </BrowserRouter>

    </div>
  )
}

export default AppRoutes