import React from 'react'
import './App.css'

import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <div className='app'>

      <h1>Slot Booking Web Application</h1>

      <AppRoutes/>
    </div>
  )
}

export default App