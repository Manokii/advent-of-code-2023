import { readFileSync } from "fs";
import { resolve } from "path";

function day1part1(input: string) {
  let res = 0;
  for (const line of input.split("\n")) {
    const digits = line.replace(/\D/gi, "");
    const firstAndLastDigit = digits.slice(0, 1) + digits.slice(-1);
    res += parseInt(firstAndLastDigit);
  }

  return res;
}

// ---

function day1part2(input: string) {
  const alpha: Record<string, number> = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    "0": 0,
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
  };
  let res = 0;
  const numAlphaKeys = Object.keys(alpha);

  for (const line of input.split("\n")) {
    const numberIndexes: number[] = [];

    for (let i = 0; i < line.length; i++) {
      for (const key of numAlphaKeys) {
        const slice = line.slice(i, i + key.length);
        if (key === slice) {
          numberIndexes.push(alpha[key]);
        }
      }
    }

    const digits = numberIndexes.filter((v) => v !== undefined);
    const firstAndLastDigit = "" + digits.slice(0, 1) + digits.slice(-1);
    res += parseInt(firstAndLastDigit);
  }

  return res;
}

const dir = (path: string) => resolve(__dirname, path);
const d1p1Example = readFileSync(dir("./input-p1.txt"), "utf8").trim();
const d1p2Example = readFileSync(dir("./input-p2.txt"), "utf8").trim();
const input = readFileSync(dir("./input.txt"), "utf8").trim();

const p1ExampleAnswer = day1part1(d1p1Example);
const p2ExampleAnswer = day1part2(d1p2Example);
const p1Answer = day1part1(input);
const p2Answer = day1part2(input);

console.log("p1-example", p1ExampleAnswer);
console.log("p2-example", p2ExampleAnswer);
console.log("p1", p1Answer);
console.log("p2", p2Answer);
