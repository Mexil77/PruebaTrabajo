const EvaluaGanador = require("../problema2");

test("Evalua al ganador de index1", async () => {
  const result = await EvaluaGanador("./inputs/input1.txt");
  expect(result).toBe("1 58");
});
test("Evalua al ganador de index2", async () => {
  const result = await EvaluaGanador("./inputs/input2.txt");
  expect(result).toBe("2 87");
});
test("Evalua al ganador de index3", async () => {
  const result = await EvaluaGanador("./inputs/input3.txt");
  expect(result).toBe("1 119");
});
test("Evalua al ganador de index4", async () => {
  const result = await EvaluaGanador("./inputs/input4.txt");
  expect(result).toBe("1 38");
});
