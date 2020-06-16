import React from 'react'
import Palette from './components/Palette'

import { seedColors } from './utils'

function App() {
  return (
    <div>
      <Palette {...seedColors[0]} />
    </div>
  )
}

export default App
