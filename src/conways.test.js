import { evolve, findPotentialSitesForNextGeneration, neighboursOf, survives } from './conways'

test('knows neighbours cords', () => {
    const neighbours = neighboursOf(2, 2)
    expect(neighbours).toEqual([
        [1, 3], [2, 3], [3, 3],
        [1, 2], /* [2,2] */[3, 2],
        [1, 1], [2, 1], [3, 1]
    ])
})

describe('survival', () => {
    test('survives if alive and has two neighbours', () => {
        expect(survives(2, true)).toBeTruthy()
    })
    test('survives if alive and has three neighbours', () => {
        expect(survives(3, true)).toBeTruthy()
    })
    test('survives if not alive and has three neighbours', () => {
        expect(survives(3, false)).toBeTruthy()
    })
    test('dies if it all other cases', () => {
        expect(survives(0, false)).toBeFalsy()
        expect(survives(1, false)).toBeFalsy()
        expect(survives(2, false)).toBeFalsy()
        expect(survives(0, true)).toBeFalsy()
        expect(survives(1, true)).toBeFalsy()
        expect(survives(4, true)).toBeFalsy()
    })
})

test('find Potential Sites For Next Generation', () => {
    var world = [[1, 1], [1, 2]]
    expect(findPotentialSitesForNextGeneration(world).sort()).toEqual([
        [[0, 0], 1],
        [[0, 1], 2],
        [[0, 2], 2],
        [[0, 3], 1],
        [[1, 0], 1],
        [[1, 1], 1],
        [[1, 2], 1],
        [[1, 3], 1],
        [[2, 0], 1],
        [[2, 1], 2],
        [[2, 2], 2],
        [[2, 3], 1]]
    )
})

describe('evolution', () => {
    test('blinker', () => {
        expect(evolve([[0, 1], [1, 1], [2, 1]]).sort()).toEqual(
            [[1, 0], [1, 1], [1, 2]])
    })
})
