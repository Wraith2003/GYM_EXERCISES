import React from 'react'

import{ Route , Routes } from 'react-router-dom'; // It serves as the routing form home page and the exercise page
import { Box } from  '@mui/material' ; // box is a div width with some shading colours
import TextField from '@mui/material/TextField';
import './App.css'
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    < Box width="400px" sx={{width: {x1:'1488px'}}} m="auto">
      Navbar
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path= "/exercise/:id" element={ExerciseDetail} />   // Id means that it would be dynamic just like 1 2 3 4 and all and it would be dynamically rendered in the id component
      </Routes>
      <Footer />
    </Box>
  )
}

export default App