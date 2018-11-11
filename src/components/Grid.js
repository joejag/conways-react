import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import _ from 'lodash'

import Cell from './Cell.js'
import { evolveWorld } from '../state/actions'
import './Grid.css'

const Grid = ({ width, height, onClick }) =>
  <div className="Grid">
    <header className="Grid-header">
      <table className="Grid-table">
        <tbody>
          {_.range(0, height).map(y =>
            <tr key={y}>
              {_.range(0, width).map(x =>
                <Cell key={x} x={x} y={y}/>)}
            </tr>
          )}
        </tbody>
      </table>
      <button onClick={onClick}>Go</button>
    </header>
  </div>

Grid.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  onClick: PropTypes.func
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(evolveWorld())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Grid)
