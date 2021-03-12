import React from 'react'

const PaletteFooter = ({ paletteName, emoji }) => {
  return (
    <footer className="palette__footer">
      {paletteName} <span className="palette__footer-emoji">{emoji}</span>
    </footer>
  )
}

export default PaletteFooter
