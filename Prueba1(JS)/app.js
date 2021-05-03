const encuentraPalabra = require("./problema1");

const ini = async () => {
  const res = await encuentraPalabra("./inputs/input1.txt");
  console.log(res);
};

ini();
