import input from "./input/day-4"

const parseInput = () => {
  const [drawsString, ...gridStrings] = input.split("\n\n")
  const draws = drawsString.split(",").map((draw) => Number(draw))
  const grids = gridStrings
    .map((grid) =>
      grid
        .trim()
        .replaceAll("  ", " ")
        .replace("\n ", "\n")
        .split("\n")
        .map((row, RI) =>
          row
            .trim()
            .split(" ")
            .map((column, CI) => ({
              row: RI,
              column: CI,
              number: Number(column),
              marked: false,
            }))
        )
        .reduce((flatMatrix, row) => {
          flatMatrix.push(...row)
          return flatMatrix
        }, [])
    )
    .map((grid) => ({
      columnCounters: new Array<number>(5).fill(0),
      rowCounters: new Array<number>(5).fill(0),
      matrix: grid,
    }))

  return { draws, grids }
}

type BingoNumber = {
  row: number
  column: number
  number: number
  marked: boolean
}

type Bingo = {
  type: "column" | "row"
  markedIndex: number
  matrix: BingoNumber[]
  gridIndex: number
  number: number
} | null

const findBingo = (
  draws: number[],
  grids: Array<{ matrix: BingoNumber[]; rowCounters: number[]; columnCounters: number[] }>
): Bingo => {
  let bingo: Bingo = null

  draws.every((number) => {
    return grids.every((grid, gridIndex) => {
      return grid.matrix.every((cell) => {
        if (cell.number === number) {
          grid.rowCounters[cell.row]++
          grid.columnCounters[cell.column]++
          cell.marked = true
          if (grid.rowCounters[cell.row] === 5 || grid.columnCounters[cell.column] === 5) {
            bingo = {
              type: grid.rowCounters[cell.row] === 5 ? "row" : "column",
              markedIndex: grid.rowCounters[cell.row] === 5 ? cell.row : cell.column,
              matrix: grid.matrix,
              gridIndex,
              number,
            }
            return false
          }
        }
        return true
      })
    })
  })

  return bingo
}

const computeScore = (bingo: Bingo) => {
  if (bingo == null) {
    console.log("no bingo")
    return
  }
  const unmarkedMatrix = bingo.matrix.filter((cell) => !cell.marked)
  let unmarkedSum = unmarkedMatrix.reduce((score, cell) => score + cell.number, 0)

  return unmarkedSum * bingo.number
}

export const day4 = () => {
  const { draws, grids } = parseInput()

  const bingo = findBingo(draws, grids)
  const score = computeScore(bingo)

  console.log(score)
}
