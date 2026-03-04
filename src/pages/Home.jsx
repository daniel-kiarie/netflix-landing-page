import React from 'react'

// Nav icons
import search from '/search.png'
import home from '/home.png'
import clap from '/video clap.jpg'
import screen from '/screen.png'
import add from '/add.png'
import shuffle from '/shuffle.png'

import imdb from '/imdb.png'
import netflix from '/netflix.png'
import money_heist2 from '/money_heist2.jpg'


import "../styles/home.css"
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='main'>
            <header className='nav' >
                <div className='nav_icons'>
                    <a href="#search"><img src={search} alt="Search Bar" /></a>
                    <Link to='/'><img src={home} alt="Home Icon" /></Link>
                    <Link to='/catalogues'><img src={clap} alt="Video Clap" /></Link>
                    <a href="#"><img src={screen} alt="Smart Screen" /></a>
                    <a href="#"><img src={add} alt="add.png" /></a>
                    <a href="#"> <img src={shuffle} alt="Shuffle Icon" /></a>
                </div>

            </header>

            <div className='title'>
                <img className='home' src={netflix} alt="Neflix Icon" />
                <div className='icon'>
                    <h2>SERIES</h2>
                    <h3>MONEY HEIST</h3>
                </div>

                <div>
                    <img src={imdb} alt="imdb logo" />
                </div>
            </div>

            {/* icon image */}
            <img className='home_image' src={money_heist2} alt="Money Heist" />
        </div>
    )
}

export default Home

