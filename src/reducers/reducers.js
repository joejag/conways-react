const solataire = (state = {deck: []}, action) => {
    switch (action.type) {
        case 'ADD_CARD':
            return {...state, deck: [...state.deck, action.card] }
        case 'ADD_A_FRESH_DECK':
            return {...state, deck: action.cards }
        default:
            return state
    }
}

export default solataire