import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { addLiveCell } from '../state/actions'
import './Cell.css'

const arrayAwareIncludes = (arr, item) => arr.some((candidate) => _.isEqual(candidate, item))

const onMouseEvent = (onClick) => (e) => {
  if (e.nativeEvent.which !== 1) {
    return // this isn't a left click, ignore
  }
  onClick()
}

const Cell = ({ isAlive, onClick }) =>
  <td
    className={isAlive ? 'Cell Cell-alive' : 'Cell Cell-dead'}
    onMouseOver={onMouseEvent(onClick)}
    onMouseDown={onMouseEvent(onClick)}
  />

const mapStateToProps = (state, ownProps) => ({
  isAlive: arrayAwareIncludes(state.liveCells, [ownProps.x, ownProps.y])
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(addLiveCell(ownProps.x, ownProps.y))
})

Cell.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  isAlive: PropTypes.bool,
  onClick: PropTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cell)
