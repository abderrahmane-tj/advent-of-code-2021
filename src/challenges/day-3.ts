import input from "./input/day-3"
import { bin2dec } from "../utils/math"

const computMostCommon = (numbers: string[]) => {
  const width = numbers[0].length
  const sum = new Array(width).fill(0)
  numbers.forEach((number) => {
    for (let i = 0; i < number.length; i++) {
      sum[i] += Number(number[i])
    }
  })
  const mostCommon = sum.map((s) => (s > ((numbers.length / 2) | 0) ? 1 : 0)).join("")
  const leastCommon = sum.map((s) => (s > ((numbers.length / 2) | 0) ? 0 : 1)).join("")
  return {
    mostCommon,
    leastCommon,
    sum,
  }
}

const computeRating = (numbers: string[], whenEquan: string) => {
  const width = numbers[0].length
  let filteredNumbers = numbers
  for (let i = 0; i < width; i++) {
    if (filteredNumbers.length === 1) {
      break
    }
    const { mostCommon, leastCommon, sum } = computMostCommon(filteredNumbers)
    filteredNumbers = filteredNumbers.filter((number) => {
      if (filteredNumbers.length % 2 === 0 && filteredNumbers.length / 2 === sum[i]) {
        return number[i] === whenEquan
      }
      if (whenEquan === "1") {
        return mostCommon[i] === number[i]
      }
      if (whenEquan === "0") {
        return leastCommon[i] === number[i]
      }
    })
  }
  return filteredNumbers[0]
}

export const day3 = () => {
  const numbers = input.split("\n")
  const { mostCommon: gammaBinaryString, leastCommon: epsilonBinaryString } =
    computMostCommon(numbers)
  const gammaDecimal = bin2dec(gammaBinaryString)
  const epsilonDecimal = bin2dec(epsilonBinaryString)
  console.log(gammaDecimal * epsilonDecimal)
}

export const day3_2 = () => {
  const numbers = input.split("\n")
  const oxygenRatings = computeRating(numbers, "1")
  const co2Ratings = computeRating(numbers, "0")
  console.log(bin2dec(oxygenRatings) * bin2dec(co2Ratings))
}
