import { day1 } from "./challenges/day-1"
import { day1_2 } from "./challenges/day-1_2"
import { day2 } from "./challenges/day-2"
import { day2_2 } from "./challenges/day-2_2"
import { day3 } from "./challenges/day-3"

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
defineProgram("day 2", day2)
defineProgram("day 2_2", day2_2)
defineProgram("day 3", day3)
