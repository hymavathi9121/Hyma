import React from 'react'
import Display from './components/Display'
import Form from './components/Form'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form/>}/>
        <Route path="/display" element={<Display />}/>
      </Routes>
    </BrowserRouter>
  )
}