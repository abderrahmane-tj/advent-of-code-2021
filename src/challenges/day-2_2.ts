import input from "./input/day-2"

export const day2_2 = () => {
  const instructions = input.split("\n")
  let Z = 0
  let Y = 0
  let Aim = 0

  instructions.forEach((instruction) => {
    const [direction, distance] = instruction.split(" ")
    const Step = Number(distance)
    switch (direction) {
      case "forward":
        Z += Step
        Y += Step * Aim
        break
      case "up":
        Aim -= Step
        break
      case "down":
        Aim += Step
        break
      default:
        throw new Error("Shouldn't be here")
    }
  })
  console.log(Z * Y)
}
