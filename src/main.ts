import readline from "readline"
import { day1 } from "./day-1"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

enum LoopState {
  LOOP,
  STOP,
}

const programs: Record<string, () => void> = {
  "day 1": day1,
}

const parseAnswer = (answer: string): LoopState => {
  if (programs.hasOwnProperty(answer)) {
    programs[answer]()
  }
  if (answer === "q") {
    return LoopState.STOP
  } else {
    return LoopState.LOOP
  }
}

async function main() {
  do {
    const answer = await new Promise<string>((resolve) =>
      rl.question("λ ", resolve)
    )
    if (parseAnswer(answer) === LoopState.STOP) {
      break
    }
  } while (true)
  rl.close()
}

void main()
