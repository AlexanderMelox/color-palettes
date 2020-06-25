import React from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

import './navbar.scss'

const Navbar = ({ level, onSliderChange }) => {
  return (
    <header className="navbar">
      <div className="navbar__logo">
        <a href="/asdas">React color picker</a>
      </div>
      <div className="slider-container">
        <span>Level: {level}</span>
        <div className="slider">
          <Slider
            min={100}
            max={900}
            step={100}
            defaultValue={level}
            onChange={onSliderChange}
          />
        </div>
      </div>
    </header>
  )
}

export default Navbar
