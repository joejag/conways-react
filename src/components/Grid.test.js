import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import conwaysReducers from '../state/reducers'
import Grid from './Grid'

Enzyme.configure({ adapter: new Adapter() })

const store = createStore(conwaysReducers)

it('renders without crashing', () => {
  shallow(
    <Provider store={store}>
      <Grid />
    </Provider>,
    {}
  )
})
