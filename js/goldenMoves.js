import state from './state.js'

const golden = document.getElementById('Golden')

let lastTime = null
let positionX = 60
let positionY = 20
const limitX = []
let stepSize = 1
const duration = 1000

const positionFloor = position => {
  document.getElementById('floor').style.transform = `translateX(-${position * window.innerWidth}px)`

  switch (position) {
    case 2:
      limitX[0] = 51.5
      limitX[1] = 67
      break
  }
}

const legWave = () => {
  const svgLeftLeg = document.getElementById('leftLegStop')

  svgLeftLeg.classList.toggle('legWave')
  setTimeout(() => {
    svgLeftLeg.classList.remove('legWave')
  }, 2500)
}

const move = (side, destination) => {
  if (!['bodyMoveX', 'bodyMoveB', 'bodyMoveT'].some(className => golden.classList.contains(className))) return

  const rectIrisR = document.getElementById('rectIrisR')
  const rectIrisL = document.getElementById('rectIrisL')

  switch (side) {
    case 'r':
    case 'l':
      state('moveX')

      document.getElementById('legMoveStopXFR').classList.add('legMoveStartX0')
      document.getElementById('legMoveStopXBL').classList.add('legMoveStartX0')
      document.getElementById('legMoveStopXFL').classList.add('legMoveStartX1')
      document.getElementById('legMoveStopXBR').classList.add('legMoveStartX1')

      rectIrisR.classList.add('irisMoveX')
      rectIrisL.classList.add('irisMoveX')

      // Calcular el destino basado en la direccion
      side === 'r' ? destination += positionX : destination = positionX - destination
      stepSize = 1
      break

    case 'b':
      state('moveB')

      document.getElementById('legMoveStopBFR').classList.add('legMoveStartY0')
      document.getElementById('legMoveStopBBL').classList.add('legMoveStartY0')
      document.getElementById('legMoveStopBFL').classList.add('legMoveStartY1')
      document.getElementById('legMoveStopBBR').classList.add('legMoveStartY1')

      rectIrisR.classList.add('irisMoveB')
      rectIrisL.classList.add('irisMoveB')

      destination = positionY - destination - 15
      stepSize = 7

      break

    case 't':
      state('moveT')

      document.getElementById('legMoveStopTFR').classList.add('legMoveStartY0')
      document.getElementById('legMoveStopTBL').classList.add('legMoveStartY0')
      document.getElementById('legMoveStopTFL').classList.add('legMoveStartY1')
      document.getElementById('legMoveStopTBR').classList.add('legMoveStartY1')

      destination += positionY + 15
      stepSize = 7

      break
  }

  const update = time => {
    if (!lastTime) {
      lastTime = time
    }

    // Tiempo desde el último frame
    const deltaTime = time - lastTime
    lastTime = time

    // Calcular el desplazamiento basado en el tiempo transcurrido
    const displacementPerMillisecond = stepSize / duration

    switch (side) {
      case 'r':
        if (positionX >= destination || positionX >= limitX[1]) {
          document.getElementById('legMoveStopXFR').classList.remove('legMoveStartX0')
          document.getElementById('legMoveStopXBL').classList.remove('legMoveStartX0')
          document.getElementById('legMoveStopXFL').classList.remove('legMoveStartX1')
          document.getElementById('legMoveStopXBR').classList.remove('legMoveStartX1')

          rectIrisR.classList.remove('irisMoveX')
          rectIrisL.classList.remove('irisMoveX')
          return
        }
        positionX += displacementPerMillisecond * deltaTime
        golden.style.left = `${positionX}%`
        golden.style.transform = ''
        break

      case 'l':
        if (positionX <= destination || positionX <= limitX[0]) {
          document.getElementById('legMoveStopXFR').classList.remove('legMoveStartX0')
          document.getElementById('legMoveStopXBL').classList.remove('legMoveStartX0')
          document.getElementById('legMoveStopXFL').classList.remove('legMoveStartX1')
          document.getElementById('legMoveStopXBR').classList.remove('legMoveStartX1')

          rectIrisR.classList.remove('irisMoveX')
          rectIrisL.classList.remove('irisMoveX')
          return
        }
        positionX -= displacementPerMillisecond * deltaTime
        golden.style.left = `${positionX}%`
        golden.style.transform = 'scale(.7) scaleX(-1)'
        break

      case 'b':

        if (positionY <= destination || positionY <= -30) {
          document.getElementById('legMoveStopBFR').classList.remove('legMoveStartY0')
          document.getElementById('legMoveStopBBL').classList.remove('legMoveStartY0')
          document.getElementById('legMoveStopBFL').classList.remove('legMoveStartY1')
          document.getElementById('legMoveStopBBR').classList.remove('legMoveStartY1')

          rectIrisR.classList.remove('irisMoveB')
          rectIrisL.classList.remove('irisMoveB')
          return
        }

        positionY -= displacementPerMillisecond * deltaTime
        golden.style.bottom = `${positionY}%`
        golden.style.transform = 'scale(.7)'

        break

      case 't':
        if (positionY >= destination || positionY >= 30) {
          document.getElementById('legMoveStopTFR').classList.remove('legMoveStartY0')
          document.getElementById('legMoveStopTBL').classList.remove('legMoveStartY0')
          document.getElementById('legMoveStopTFL').classList.remove('legMoveStartY1')
          document.getElementById('legMoveStopTBR').classList.remove('legMoveStartY1')
          return
        }
        positionY += displacementPerMillisecond * deltaTime
        golden.style.bottom = `${positionY}%`
        golden.style.transform = 'scale(.7)'

        break
    }

    requestAnimationFrame(update)
  }

  requestAnimationFrame(update)

  lastTime = null
}

const startIntervalMove = () => {
  state('moveX')

  const intervalMove = setInterval(() => {
    const letters = ['r', 'r', 'l', 'l', 'b', 'b', 't', 't', 's']
    const selecdLetter = letters[Math.floor(Math.random() * letters.length)]
    console.log(selecdLetter)

    if (selecdLetter === 's') {
      clearInterval(intervalMove)
      golden.style.transform = 'scale(.7)'
      state('stop')

      setTimeout(() => {
        state('moveX')
        startIntervalMove()
      }, 60000)
    } else {
      move(selecdLetter, Math.floor((Math.random() * 4) + 2))
    }
  }, 7000)
}

positionFloor(2)

startIntervalMove()

golden.addEventListener('click', legWave)
