import React from 'react'
import Palette from './components/Palette'

import { seedColors, generatePalette } from './utils'

generatePalette(seedColors[0])

const App = () => {
  return (
    <div>
      <Palette {...seedColors[0]} />
    </div>
  )
}

export default App
