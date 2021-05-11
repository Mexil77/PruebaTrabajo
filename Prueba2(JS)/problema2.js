fs = require("fs");
const EvaluaGanador = async (rutaDelTxt) => {
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
  let inputArray = Input.split(regex)
    .filter((data) => data.length > 0)
    .map((data) => parseInt(data));

  let rounds = parseInt(inputArray.shift());

  if (rounds < 1 || rounds > 10000) {
    return "El numero de rondas no es valido.";
  }

  let puntajesJugador1 = inputArray.filter((data, idx) => idx % 2 == 0);
  let puntajesJugador2 = inputArray.filter((data, idx) => idx % 2 == 1);
  let ganadores = [];

  for (let i = 0; i < rounds; i++) {
    if (i > 0) {
      puntajesJugador1[i] += puntajesJugador1[i - 1];
      puntajesJugador2[i] += puntajesJugador2[i - 1];
    }
    if (puntajesJugador1[i] > puntajesJugador2[i]) {
      ganadores.push({
        jugadorGanador: 1,
        ventaja: puntajesJugador1[i] - puntajesJugador2[i],
      });
    } else {
      ganadores.push({
        jugadorGanador: 2,
        ventaja: puntajesJugador2[i] - puntajesJugador1[i],
      });
    }
  }

  let roundGanador = { j: 0, v: 0 };

  for (let i = 0; i < ganadores.length; i++) {
    if (ganadores[i].ventaja > roundGanador.v) {
      roundGanador.v = ganadores[i].ventaja;
      roundGanador.j = ganadores[i].jugadorGanador;
    }
  }

  return `${roundGanador.j} ${roundGanador.v}`;
};

module.exports = EvaluaGanador;
