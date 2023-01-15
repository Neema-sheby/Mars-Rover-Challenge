import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//----------------------------------------------------------------

export function print(str: string) {
  console.log(str);
}

export function clear() {
  console.clear();
}

export function askQuestion(ques: string, callback: (arg: string) => void) {
  rl.question(ques, callback);
}

export function onEnter(callback: () => void) {
  rl.on("line", callback);
}
