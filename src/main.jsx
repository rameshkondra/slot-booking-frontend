import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BookingProvider } from './context/BookingContext'
import {ToastProvider} from 'react-super-toastify';
import 'react-super-toastify/dist/index.esm.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastProvider>
    <BookingProvider>
    <App />
    </BookingProvider>
    </ToastProvider>
  </StrictMode>,
)
