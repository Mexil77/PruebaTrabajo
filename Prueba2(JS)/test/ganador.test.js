const EvaluaGanador = require("../problema2");

test("Evalua al ganador de index1", async () => {
  const result = await EvaluaGanador("input1");
  expect(result).toBe("1 58");
});
test("Evalua al ganador de index2", async () => {
  const result = await EvaluaGanador("input2");
  expect(result).toBe("2 87");
});
test("Evalua al ganador de index3", async () => {
  const result = await EvaluaGanador("input3");
  expect(result).toBe("1 119");
});
test("Evalua al ganador de index4", async () => {
  const result = await EvaluaGanador("input4");
  expect(result).toBe("1 38");
});
