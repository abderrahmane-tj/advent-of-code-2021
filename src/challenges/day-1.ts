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

export const day1_2 = () => {
  const heights = input.split("\n")
  let increases = 0
  let A = 0
  let B = Number(heights[0]) + Number(heights[1]) + Number(heights[2])
  const length = heights.length
  for (let i = 3; i < length; i++) {
    A = B
    B = Number(heights[i]) + Number(heights[i - 1]) + Number(heights[i - 2])
    if (B - A > 0) {
      increases++
    }
  }
  console.log(increases)
}
