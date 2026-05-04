import React, { useState } from 'react'
import '../styles/catalogue.css'

import one from '/1.jpg'
import two from '/2.jpg'
import three from '/3.jpg'
import four from '/4.jpg'
import five from '/5.jpg'

const movies = [
  { id: 1, src: one,   title: 'Money Heist',      year: 2017, genre: 'Crime',    rating: '9.2' },
  { id: 2, src: two,   title: 'Dark',              year: 2017, genre: 'Sci-Fi',   rating: '8.8' },
  { id: 3, src: three, title: 'Squid Game',        year: 2021, genre: 'Thriller', rating: '8.0' },
  { id: 4, src: four,  title: 'Ozark',             year: 2017, genre: 'Drama',    rating: '8.4' },
  { id: 5, src: five,  title: 'Peaky Blinders',    year: 2013, genre: 'Crime',    rating: '8.8' },
  { id: 6, src: one,   title: 'Breaking Bad',      year: 2008, genre: 'Drama',    rating: '9.5' },
  { id: 7, src: two,   title: 'The Crown',         year: 2016, genre: 'History',  rating: '8.6' },
  { id: 8, src: three, title: 'Narcos',            year: 2015, genre: 'Crime',    rating: '8.8' },
  { id: 9, src: four,  title: 'Black Mirror',      year: 2011, genre: 'Sci-Fi',   rating: '8.3' },
  { id: 10, src: five, title: 'Stranger Things',   year: 2016, genre: 'Sci-Fi',   rating: '8.7' },
]

const Catalogue = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const genres = ['All', ...new Set(movies.map(m => m.genre))]
  const filtered = activeFilter === 'All' ? movies : movies.filter(m => m.genre === activeFilter)

  return (
    <div className="catalogue">
      <div className="catalogue__header">
        <h2 className="catalogue__title">Continue Watching</h2>
        <div className="catalogue__filters">
          {genres.map(g => (
            <button
              key={g}
              className={`filter-btn ${activeFilter === g ? 'filter-btn--active' : ''}`}
              onClick={() => setActiveFilter(g)}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      <div className="movie_catalogue">
        {filtered.map(movie => (
          <div key={movie.id} className="movie-card">
            <div className="movie-card__media">
              <img src={movie.src} alt={movie.title} />
              <div className="movie-card__overlay">
                <button className="play-btn">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
              <span className="movie-card__rating">★ {movie.rating}</span>
            </div>
            <div className="movie-card__info">
              <span className="movie-card__genre">{movie.genre}</span>
              <p className="movie-card__name">{movie.title}</p>
              <span className="movie-card__year">{movie.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Catalogue