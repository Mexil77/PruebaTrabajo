inputNombre = 'input.txt'
archivoInput = open(inputNombre, mode='r')
textoInput = archivoInput.read()


def convert(d):
    return int(d)


def separaPar(d):
    if d % 2 == 0:
        return d


textoInputSeparado = list(map(convert, textoInput.split()))
textoInputSeparado.pop(0)

jugador1 = []
jugador2 = []
ganadoresJugadores = []
ganadoresVentajas = []

for i in range(len(textoInputSeparado)):
    if i % 2 == 0:
        jugador1.append(textoInputSeparado[i])
    else:
        jugador2.append(textoInputSeparado[i])

for i in range(len(jugador1)):
    if i > 0:
        jugador1[i] += jugador1[i-1]
        jugador2[i] += jugador2[i-1]

    if jugador1[i] > jugador2[i]:
        ganadoresJugadores.append(1)
        ganadoresVentajas.append(jugador1[i] - jugador2[i])
    else:
        ganadoresJugadores.append(2)
        ganadoresVentajas.append(jugador2[i] - jugador1[i])

ganadorVentaja = 0
ganadorIndex = -1

for i in range(len(ganadoresJugadores)):
    if ganadoresVentajas[i] > ganadorVentaja:
        ganadorVentaja = ganadoresVentajas[i]
        ganadorIndex = i

print(str(ganadoresJugadores[ganadorIndex]) +
      " "+str(ganadoresVentajas[ganadorIndex]))
