import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Paginas
import Login from '../page/login'
import Dashboard from '../page/dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    
    </BrowserRouter>
  )
}


export default App