var _ = require('lodash')

export const neighboursOf = (x, y) =>
    [[x - 1, y + 1], [x, y + 1], [x + 1, y + 1],
    [x - 1, y], /*  [x, y]*/[x + 1, y],
    [x - 1, y - 1], [x, y - 1], [x + 1, y - 1]]

export const survives = (numOfNeighbours, alive) => {
    if (alive && (numOfNeighbours === 2 || numOfNeighbours === 3)) return true
    if (!alive && numOfNeighbours === 3) return true
    return false
}

export const findPotentialSitesForNextGeneration = (world) => {
    const allNeigboursOfLiveCells = world.map((cell) => neighboursOf(cell[0], cell[1]))

    var potentialCells = new Map()
    _.flatten(allNeigboursOfLiveCells).forEach((cell) => {
        var count = 1
        console.log(potentialCells.has(cell))
        if(potentialCells.has(cell)) {
            console.log('wasdsads')
            count = potentialCells.get(cell) + 1
        }
        potentialCells.set(cell, count)
    })

    return potentialCells 
}

export const evolve = (world) => {
    return []
}