import React from 'react'


import '../styles/catalogue.css'

import one from '/1.jpg'
import two from '/2.jpg'
import three from '/3.jpg'
import four from '/4.jpg'
import five from '/5.jpg'

const Catalogue = () => {
    return (
        <div className='catalogue'>
            {/* Movie catalogue */}

            <div className='movie_catalogue'>
                <img src={one} alt="Movie one" />
                <img src={two} alt="Movie two" />
                <img src={three} alt="Movie three" />
                <img src={four} alt="Movie four" />
                <img src={five} alt="Movie five" />
                <img src={one} alt="Movie one" />
                <img src={two} alt="Movie two" />
                <img src={three} alt="Movie three" />
                <img src={four} alt="Movie four" />
                <img src={five} alt="Movie five" />
                <img src={one} alt="Movie one" />
                <img src={two} alt="Movie two" />
                <img src={three} alt="Movie three" />
                <img src={four} alt="Movie four" />
                <img src={five} alt="Movie five" />
            </div>
        </div>
    )
}

export default Catalogue
