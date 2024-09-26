const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test("it works with positive values (+1234)", () => {
    const test_case = 1234;
    expect(addCommas(test_case)).toEqual("1,234");
  });

  test("it works with negative values (-1234)", () => {
    const test_case = -1234;
    expect(addCommas(test_case)).toEqual("-1,234");
  });

  test("it works with positive digits smaller than 3 (12)", () => {
    const test_case = 12;
    expect(addCommas(test_case)).toEqual("12");
  });

  test("it works with negative digits smaller than 3 (-12)", () => {
    const test_case = -12;
    expect(addCommas(test_case)).toEqual("-12");
  });

  test("it works with large positive numbers (9876543210)", () => {
    const test_case = 9876543210;
    expect(addCommas(test_case)).toEqual("9,876,543,210");
  });

  test("it works with large negative numbers (-9876543210)", () => {
    const test_case = -9876543210;
    expect(addCommas(test_case)).toEqual("-9,876,543,210");
  });

  test("it works (+6)", () => {
    const test_case = 6;
    expect(addCommas(test_case)).toEqual("6");
  });

  test("it works (-10)", () => {
    const test_case = -10;
    expect(addCommas(test_case)).toEqual("-10");
  });

  test("it works (-5678)", () => {
    const test_case = -5678;
    expect(addCommas(test_case)).toEqual("-5,678");
  });

  test("(bonus) it works with positive floating-point values (12345.678)", () => {
    const test_case = 12345.678;
    expect(addCommas(test_case)).toEqual("12,345.678");
  });

  test("(bonus) it works with negative floating-point values (-3141592.65)", () => {
    const test_case = -3141592.65;
    expect(addCommas(test_case)).toEqual("-3,141,592.65");
  });

});
