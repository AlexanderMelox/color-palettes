import React, { useState, useCallback } from 'react'
import Slider from 'rc-slider'
import { Link } from 'react-router-dom'
import { Select, MenuItem, Snackbar, IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

import 'rc-slider/assets/index.css'
import './navbar.scss'

const Navbar = ({ level, format, onSliderChange, onColorFormatChange }) => {
  const [snackbarVisible, setSnackbarVisisble] = useState(false)

  const closeSnackbar = useCallback(() => setSnackbarVisisble(false), [])

  const handleFormatChange = useCallback(
    (event) => {
      const colorFormat = event.target.value

      setSnackbarVisisble(true)
      onColorFormatChange(colorFormat)
    },
    [onColorFormatChange]
  )

  const showSlider = level && onSliderChange

  return (
    <>
      <header className="navbar">
        <div className="navbar__logo">
          <Link to="/">reactcolorpicker</Link>
        </div>
        {showSlider && (
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
        )}
        <div className="navbar__select-container">
          <Select value={format} onChange={handleFormatChange}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255, 1.0)</MenuItem>
          </Select>
        </div>
      </header>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={snackbarVisible}
        autoHideDuration={3000}
        message={
          <span id="message-id">Format changed to {format.toUpperCase()}!</span>
        }
        onClose={closeSnackbar}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        action={[
          <IconButton
            onClick={closeSnackbar}
            color="inherit"
            key="close"
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </>
  )
}

export default Navbar
