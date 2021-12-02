import readline from "readline"
import { programs } from "./programs"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

enum LoopState {
  LOOP,
  STOP,
}

const parseAnswer = (answer: string): LoopState => {
  if (answer === "q") {
    return LoopState.STOP
  } else {
    if (programs.has(answer)) {
      programs.get(answer)?.()
    } else {
      console.error(`can't find the ${answer} program`)
    }

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
