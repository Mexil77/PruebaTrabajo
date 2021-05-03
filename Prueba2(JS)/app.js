const EvaluaGanador = require("./problema2");

ini = async () => {
  const res = await EvaluaGanador("./inputs/input1.txt");
  console.log(res);
};

ini();
