import input from "./input/day-2"

export const day2 = () => {
  const instructions = input.split("\n")
  let Z = 0
  let Y = 0
  instructions.forEach((instruction) => {
    const [direction, distance] = instruction.split(" ")
    switch (direction) {
      case "forward":
        Z += Number(distance)
        break
      case "up":
        Y -= Number(distance)
        break
      case "down":
        Y += Number(distance)
        break
      default:
        throw new Error("Shouldn't be here")
    }
  })
  console.log(Z * Y)
}
