import { evolve } from '../conways'

const initialState = {
    liveCells: []
}

const conwaysReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_LIVE_CELL':
            return { ...state, liveCells: [...state.liveCells, action.cords] }
        case 'EVOLVE_WORLD':
            return { ...state, liveCells: evolve([...state.liveCells]) }
        default:
            return state
    }
}

export default conwaysReducers