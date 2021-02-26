import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Palette from './components/Palette'

import { seedColors, generatePalette } from './utils'

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        home
      </Route>
      <Route exact path="/palette/:id">
        palette
      </Route>
    </Switch>
    // <div>
    //   <Palette palette={generatePalette(seedColors[4])} />
    // </div>
  )
}

export default App
