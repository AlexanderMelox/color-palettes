import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PalettePage from './pages/palette-page'
import { seedColors, generatePalette } from './utils'

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        home
      </Route>
      <Route exact path="/palette/:id">
        <PalettePage />
      </Route>
    </Switch>
  )
}

export default App
