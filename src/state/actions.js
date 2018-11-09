export const addLiveCell = (x, y) => ({
    type: 'ADD_LIVE_CELL',
    cords: [x, y]
})

export const evolveWorld = () => ({
    type: 'EVOLVE_WORLD'
})