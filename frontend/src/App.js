import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import IndexRoutes from './routes'
import Navbar from './components/navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <IndexRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App
