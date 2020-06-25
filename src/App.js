import React from 'react'
import Palette from './components/Palette'

import { seedColors, generatePalette } from './utils'

const App = () => {
  return (
    <div>
      <Palette palette={generatePalette(seedColors[4])} />
    </div>
  )
}

export default App
