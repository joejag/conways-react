import _ from 'lodash'

const jsArrayFromCoercedString = (key) => [parseInt(key.split(',')[0]), parseInt(key.split(',')[1])]
const arrayAwareIncludes = (arr, item) => arr.some((candidate) => _.isEqual(candidate, item))

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
    const frequenciesObject = _.countBy(_.flatten(allNeigboursOfLiveCells))
    return _.map(frequenciesObject, (val, key) => {
        return [jsArrayFromCoercedString(key), val]
    })
}

export const evolve = (world) => {
    return findPotentialSitesForNextGeneration(world)
              .filter((cell) => survives(cell[1], arrayAwareIncludes(world, cell[0])))
              .map((cell) => cell[0])
}
