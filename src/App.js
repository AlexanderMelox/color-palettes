import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PalettePage from './pages/palette-page'
import HomePage from './pages/home'

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/palette/:id">
        <PalettePage />
      </Route>
    </Switch>
  )
}

export default App
