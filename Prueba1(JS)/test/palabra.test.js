const encuentraPalabra = require("../problema1");

test("Encuentra las palabras del input1", async () => {
  const result = await encuentraPalabra("input1");
  expect(result).toBe("SI\nNO");
});
test("Encuentra las palabras del input1", async () => {
  const result = await encuentraPalabra("input2");
  expect(result).toBe("NO\nSI");
});
test("Encuentra las palabras del input1", async () => {
  const result = await encuentraPalabra("input3");
  expect(result).toBe("SI\nSI");
});
test("Encuentra las palabras del input1", async () => {
  const result = await encuentraPalabra("input4");
  expect(result).toBe("NO\nNO");
});
