import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Paginas
import LoginPage from '../page/loginPage'
import Dashboard from '../page/dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    
    </BrowserRouter>
  )
}


export default App