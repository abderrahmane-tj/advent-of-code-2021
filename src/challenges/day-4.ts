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
      lineCounters: new Array(5).fill(0),
      rowCounters: new Array(5).fill(0),
      grid,
    }))
  console.log(draws)
  console.log(grids)
}
