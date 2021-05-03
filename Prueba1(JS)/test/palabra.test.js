const encuentraPalabra = require("../problema1");

test("Encuentra las palabras del input1", async () => {
  const result = await encuentraPalabra("./inputs/input1.txt");
  expect(result).toBe("SI\nNO");
});
test("Encuentra las palabras del input1", async () => {
  const result = await encuentraPalabra("./inputs/input2.txt");
  expect(result).toBe("NO\nSI");
});
test("Encuentra las palabras del input1", async () => {
  const result = await encuentraPalabra("./inputs/input3.txt");
  expect(result).toBe("SI\nSI");
});
test("Encuentra las palabras del input1", async () => {
  const result = await encuentraPalabra("./inputs/input4.txt");
  expect(result).toBe("NO\nNO");
});
