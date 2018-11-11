import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import './index.css'
import Grid from './components/Grid'
import conwaysReducers from './state/reducers'
// import { evolveWorld } from './state/actions'

const store = createStore(conwaysReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <Grid width={20} height={20} />
  </Provider>,
  document.getElementById('root'))

// setInterval(() => {
//   store.dispatch(evolveWorld())
// }, 3000)
