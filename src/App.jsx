import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import './styles/home.css'
import './styles/catalogue.css'

import { Routes, Route } from 'react-router-dom'

// COMPONENTS
import Header from './components/Header'


// PAGES
import Home from './pages/Home';
import Catalogue from './pages/Catalogue';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';



function App() {


  return (
    <>
      <div className='app'>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/catalogues' element={<Catalogue />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>

    </>
  )
}

export default App
