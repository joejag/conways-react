import React from 'react'
import { connect } from 'react-redux'

import './App.css'

const mapStateToProps = state => ({
  world: state.liveCells
})

const mapDispatchToProps = dispatch => ({})

const App = ({ world }) =>
  <div className="App">
    <header className="App-header">
      { world }
    </header>
  </div>

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
