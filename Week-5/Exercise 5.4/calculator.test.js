const mathOperations = require("./module");

test("adding 5 and 3 should return 8", () => {
  expect(mathOperations.sum(5, 3)).toBe(8);
});

test("substracting 5 from 13 should return 8", () => {
  expect(mathOperations.diff(13, 5)).toBe(8);
});

test("multiplying 4 and 2 should return 8", () => {
  expect(mathOperations.product(4, 2)).toBe(8);
});
