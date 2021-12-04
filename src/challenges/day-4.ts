import input from "./input/day-4"

export const day4 = () => {
  const [drawsString, ...gridStrings] = input.split("\n\n")
  const draws = drawsString.split(",")
  const grids = gridStrings
    .map((grid) =>
      grid
        .trim()
        .replaceAll("  ", " ")
        .replace("\n ", "\n")
        .split("\n")
        .map((row) => row.trim().split(" "))
    )
    .map((grid) => ({
      columnCounters: new Array(5).fill(0),
      rowCounters: new Array(5).fill(0),
      matrix: grid,
    }))

  draws.every((number) => {
    return grids.every((grid) => {
      for (let r = 0; r < 5; r++) {
        for (let c = 0; c < 5; c++) {
          if (number === grid.matrix[r][c]) {
            grid.rowCounters[r]++
            grid.columnCounters[c]++
            if (grid.rowCounters[r] === 5) {
              console.log("row", r, grid.matrix)
              return false
            }
            if (grid.columnCounters[c] === 5) {
              console.log("column", c, grid.matrix)
              return false
            }
          }
        }
      }
      return true
    })
  })
}
