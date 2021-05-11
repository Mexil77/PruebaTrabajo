var fs = require("fs");

const encuentraPalabra = async (rutaDelTxt) => {
  require.extensions[".txt"] = function (module, filename) {
    module.exports = fs.readFileSync(filename, "utf8");
  };
  let Input = await fs.readFileSync(rutaDelTxt, "utf-8", (err, data) => {
    if (err) {
      console.log("error: " + err);
    } else {
      console.log(data);
    }
  });
  let regex = /\s/;
  let inputArray = Input.split(regex).filter((data) => data.length > 0);

  let M1 = inputArray[0];
  let M2 = inputArray[1];
  let N = inputArray[2];

  if (M1 <= 2 || M1 > 50) {
    return "Primera instruccion de dimencion no permitida";
  }
  if (M2 <= 2 || M2 > 50) {
    return "Segunda instruccion de dimencion no permitida";
  }

  if (N <= 3 || N > 5000) {
    return "Mensaje de dimencion no permitida";
  }

  if (/[^a-zA-Z0-9]/.test(N)) {
    return "Mensaje con caracteres no validos";
  }

  let primerInstruccionLetrasArray = inputArray[3];
  for (let i = 0; i < primerInstruccionLetrasArray.length; i++) {
    if (
      i < primerInstruccionLetrasArray.length - 1 &&
      primerInstruccionLetrasArray[i] === primerInstruccionLetrasArray[i + 1]
    ) {
      return "Primer instruccion tiene letras repetidas";
    }
  }
  let segundaInstruccionLetrasArray = inputArray[3];
  for (let i = 0; i < segundaInstruccionLetrasArray.length; i++) {
    if (
      i < segundaInstruccionLetrasArray.length - 1 &&
      segundaInstruccionLetrasArray[i] === segundaInstruccionLetrasArray[i + 1]
    ) {
      return "Segunda instruccion tiene letras repetidas";
    }
  }

  let primerInstruccion = inputArray[3]
    .split("")
    .map((data) => data + "+")
    .join("");
  let segundaInstruccion = inputArray[4]
    .split("")
    .map((data) => data + "+")
    .join("");
  let mensaje = inputArray[5];

  let regex1 = new RegExp(`${primerInstruccion}`);
  let regex2 = new RegExp(`${segundaInstruccion}`);

  let find1 = regex1.test(mensaje);
  let find2 = regex2.test(mensaje);

  let res = "";

  if (find1) {
    return "SI\nNO";
  } else {
    res += "NO";
  }
  res += "\n";
  if (find2) {
    res += "SI";
  } else {
    res += "NO";
  }
  return res;
};

module.exports = encuentraPalabra;
