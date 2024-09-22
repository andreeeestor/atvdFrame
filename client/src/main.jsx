import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from './App.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}  />
        <Route path="/login" element={<Login />}  />
        <Route path="/cadastro" element={<Register />}  />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
