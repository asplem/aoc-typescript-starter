import day0 from "./index";
// import fs from "fs";

describe("Day 0", () => {
    it(`solves part 1 with example`, () => {
        expect(day0.solveForPartOne("<given example input>")).toBe(
            "<given solution>",
        );
    });

    it(`solves part 2 with example`, () => {
        expect(day0.solveForPartTwo("<given example input>")).toBe(
            "<given solution>",
        );
    });

    // These are added in case you want to try to refactor your solution after the initial successful solve
    // Which is also why they're initially commented out
    // it(`solves part 1 with real input`, async () => {
    //     const content = await fs.promises.readFile(`./inputs/part1.txt`);
    //     expect(day0.solveForPartOne(content.toString())).toBe(
    //         "<your correct solution>",
    //     );
    // });

    // it(`solves part 2 with real input`, async () => {
    //     const content = await fs.promises.readFile(`./inputs/part2.txt`);
    //     expect(day0.solveForPartTwo(content.toString())).toBe(
    //         "<your correct solution>",
    //     );
    // });
});
