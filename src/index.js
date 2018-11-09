import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import './index.css'
import App from './components/App'
import conwaysReducers from './state/reducers'
import { addLiveCell, evolveWorld } from './state/actions'

const store = createStore(conwaysReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))

store.dispatch(addLiveCell(0, 1))
store.dispatch(addLiveCell(1, 1))
store.dispatch(addLiveCell(2, 1))
store.dispatch(evolveWorld())
store.dispatch(evolveWorld())
store.dispatch(evolveWorld())
