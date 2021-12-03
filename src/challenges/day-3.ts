import input from "./input/day-3"
import { bin2dec } from "../utils/math"

export const day3 = () => {
  const numbers = input.split("\n")
  const width = numbers[0].length
  const sum = new Array(width).fill(0)
  numbers.forEach((number) => {
    for (let i = 0; i < number.length; i++) {
      sum[i] += Number(number[i])
    }
  })
  const gammaBinaryString = sum.map((s) => (s > ((numbers.length / 2) | 0) ? 1 : 0)).join("")
  const epsilonBinaryString = sum.map((s) => (s > ((numbers.length / 2) | 0) ? 0 : 1)).join("")
  const gammaDecimal = bin2dec(gammaBinaryString)
  const epsilonDecimal = bin2dec(epsilonBinaryString)

  console.log(gammaDecimal * epsilonDecimal)
}
