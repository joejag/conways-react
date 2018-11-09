import conwaysReducers from './reducers'
import { addLiveCell, evolveWorld } from './actions'

it('should have a default state of an empty world', () => {
    expect(conwaysReducers(undefined, {}))
       .toEqual({liveCells: []})
})

it('can add a new live cell', () => {
    expect(conwaysReducers(undefined, addLiveCell(1, 2)))
       .toEqual({liveCells: [[1, 2]]})    
})

it('can evolve the world', () => {
    expect(conwaysReducers({liveCells: [[0, 1], [1, 1], [2, 1]] }, evolveWorld()))
       .toEqual({liveCells: [[1, 2], [1, 1], [1, 0]]})
})