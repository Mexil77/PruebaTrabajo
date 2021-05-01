const EvaluaGanador = require("./problema2");

ini = async () => {
  const res = await EvaluaGanador("input4.txt");
  console.log(res);
};

ini();
