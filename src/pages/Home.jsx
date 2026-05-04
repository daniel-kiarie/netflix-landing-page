import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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

const navItems = [
  { icon: home,    alt: 'Home',     to: '/',           isLink: true },
  { icon: search,  alt: 'Search',   to: '#search',     isLink: false },
  { icon: clap,    alt: 'Catalogue',to: '/catalogues', isLink: true },
  { icon: screen,  alt: 'Screen',   to: '#',           isLink: false },
  { icon: add,     alt: 'Add',      to: '#',           isLink: false },
  { icon: shuffle, alt: 'Shuffle',  to: '#',           isLink: false },
]

const Home = () => {
  const [activeNav, setActiveNav] = useState(0)

  return (
    <div className="home-root">

      {/* Full-bleed hero background */}
      <div className="hero-bg">
        <img src={money_heist2} alt="" aria-hidden="true" />
        <div className="hero-bg__vignette" />
        <div className="hero-bg__left-fade" />
      </div>

      {/* Vertical sidebar nav */}
      <nav className="sidebar">
        <div className="sidebar__logo">
          <span className="sidebar__logo-dot" />
        </div>

        <ul className="sidebar__items">
          {navItems.map((item, i) =>
            item.isLink ? (
              <li key={i}>
                <Link
                  to={item.to}
                  className={`sidebar__item ${activeNav === i ? 'sidebar__item--active' : ''}`}
                  onClick={() => setActiveNav(i)}
                  title={item.alt}
                >
                  <img src={item.icon} alt={item.alt} />
                  {activeNav === i && <span className="sidebar__indicator" />}
                </Link>
              </li>
            ) : (
              <li key={i}>
                
                  href={item.to}
                  className={`sidebar__item ${activeNav === i ? 'sidebar__item--active' : ''}`}
                  onClick={() => setActiveNav(i)}
                  title={item.alt}
                <a>
                  <img src={item.icon} alt={item.alt} />
                  {activeNav === i && <span className="sidebar__indicator" />}
                </a>
              </li>
            )
          )}
        </ul>

        <div className="sidebar__avatar">
          <span>JD</span>
        </div>
      </nav>

      {/* Hero content */}
      <main className="hero-content">
        <div className="hero-content__inner">

          <div className="hero-meta">
            <img src={netflix} alt="Netflix" className="hero-meta__platform" />
            <span className="hero-meta__tag">Series</span>
            <span className="hero-meta__dot" />
            <span className="hero-meta__tag">2017</span>
            <span className="hero-meta__dot" />
            <span className="hero-meta__tag">5 Seasons</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-title__sub">La Casa</span>
            <span className="hero-title__main">De Papel</span>
          </h1>

          <p className="hero-synopsis">
            A criminal mastermind who goes by "The Professor" plans the greatest heist in history —
            taking hostages inside the Royal Mint of Spain.
          </p>

          <div className="hero-badges">
            <img src={imdb} alt="IMDB" className="hero-badges__imdb" />
            <span className="hero-badges__score">8.3 / 10</span>
            <span className="hero-badges__cert">18+</span>
          </div>

          <div className="hero-actions">
            <button className="btn btn--primary">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Play Now
            </button>
            <button className="btn btn--ghost">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="16"/>
                <line x1="8" y1="12" x2="16" y2="12"/>
              </svg>
              More Info
            </button>
          </div>

        </div>
      </main>

    </div>
  )
}

export default Home