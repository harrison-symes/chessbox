import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Board from './board'

const App = () => (
  <Router>
    <div className='app-container'>
      <h1>Hello</h1>
      <Board size={8} />
    </div>
  </Router>
)

export default App
