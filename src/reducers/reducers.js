const initialState = {
    liveCells: []
}

const conwaysReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_LIVE_CELL':
            return { ...state, liveCells: [...state.liveCells, action.cords] }
        default:
            return state
    }
}

export default conwaysReducers