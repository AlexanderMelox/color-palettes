import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PalettePage from './pages/palette-page'
import HomePage from './pages/home'
import SingleColorPalettePage from './pages/single-color-palette'

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/palette/:id">
        <PalettePage />
      </Route>
      <Route exact path="/palette/:paletteId/:colorId">
        <SingleColorPalettePage />
      </Route>
    </Switch>
  )
}

export default App
