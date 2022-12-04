import run from "aocrunner";
import { access } from "fs";

const parseInput = (rawInput: string) =>
  rawInput
    .split("\n")
    .map((line) => [
      line.substring(0, line.length / 2),
      line.substring(line.length / 2),
    ])
    .map((compartmentStr) =>
      compartmentStr.map((compartment) =>
        compartment.split("").reduce((acc: Compartment, curr: string) => {
          acc[curr] = (acc[curr] || 0) + 1;
          return acc;
        }, {}),
      ),
    );

const alphabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(i + 97),
).concat(Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65)));

const getPriority = (letter: string): number => {
  return alphabet.indexOf(letter) + 1;
};

const findUnionKey = (a: Compartment, b: Compartment, c?: Compartment) => {
  // console.log(a, b, c);

  // find common key in objects
  // const unionKey = Object.keys(a).find((key) => {
  //   if (b[key] && c && c[key]) {
  //     return true;
  //   } else if (b[key]) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });

  // return unionKey;

  if (c) {
    return Object.keys(a).find((key) => {
      // console.log(key, a[key], b[key], c[key]);
      console.log(b);
      if (c[key]) {
        return true;
      } else {
        if (b[key]) {
          return true;
        }

        return false;
      }
    });
  }

  return Object.keys(a).find((key) => b[key]);
};

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);

  return input.reduce((acc, [a, b]) => {
    const unionKey = findUnionKey(a, b);

    return acc + getPriority(unionKey!);
  }, 0);
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  let priority = 0;

  for (let i = 0; i < input.length; i = i + 3) {
    const group = [input[i], input[i + 1], input[i + 2]];

    let formattedGroup = group
      .map((compartment) =>
        compartment.reduce((acc, curr) => ({ ...acc, ...curr }), {}),
      )
      .reduce((acc, curr) => {
        Object.keys(curr).forEach((key) => {
          acc[key] = (acc[key] || 0) + 1;
        });

        return acc;
      }, {});

    for (let i = 0; i < Object.keys(formattedGroup).length; i++) {
      const compartment = Object.keys(formattedGroup)[i];

      if (formattedGroup[compartment] === 3) {
        priority += getPriority(compartment);
      }
    }
  }

  // console.log(findUnionKey(input[0][0], input[0][1], input[0][2]));

  // for (let i = 0; i < input.length; i = i + 3) {
  //   const group = [input[i], input[i + 1], input[i + 2]];
  //   // console.log(group);

  //   const unionKey = findUnionKey(group[0][0], group[1][0], group[2][0]);

  //   priority += getPriority(unionKey!);
  //   console.log(unionKey);
  // }

  return priority;
};

run({
  part1: {
    tests: [
      //       {
      //         input: `
      //         vJrwpWtwJgWrhcsFMMfFFhFp
      // jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
      // PmmdzqPrVvPwwTWBwg
      // wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
      // ttgJtRGJQctTZtZT
      // CrZsJsPPZsGzwwsLwLmpwMDw
      //         `,
      //         expected: 157,
      //       },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
        vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw
        `,
        expected: 70,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  // onlyTests: true,
});

type Compartment = {
  [key: string]: number;
};
