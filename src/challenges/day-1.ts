import input from "./input/day-1"

export const day1 = () => {
  const heights = input.split("\n")
  let increases = 0
  const length = heights.length
  for (let i = 1; i < length; i++) {
    if (Number(heights[i]) - Number(heights[i - 1]) > 0) {
      increases++
    }
  }
  console.log(increases)
}
