import { day1 } from "./challenges/day-1"
import { day1_2 } from "./challenges/day-1_2"

export const programs = new Map<string, () => void>()

export const defineProgram = (name: string, program: () => void) => {
  if (programs.has(name)) {
    console.error(`program ${name} already exists`)
    return
  }
  programs.set(name, program)
}

defineProgram("day 1", day1)
defineProgram("day 1_2", day1_2)
