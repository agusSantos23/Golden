const golden = document.getElementById('Golden')

let lastTime = null
let goalPosition = null
let moveTo = null
let positionX = 0
const stepSize = 100
const duration = 1000

const move = (side, destination, time) => {
  if (!golden.classList.contains('bodyMove')) return

  const legFL = document.getElementById('legMoveStopFL')
  const legFR = document.getElementById('legMoveStopFR')
  const legBL = document.getElementById('legMoveStopBL')
  const legBR = document.getElementById('legMoveStopBR')

  const rectIrisR = document.getElementById('rectIrisR')
  const rectIrisL = document.getElementById('rectIrisL')

  legFL.classList.add('legMoveStartFL')
  legFR.classList.add('legMoveStartFR')
  legBL.classList.add('legMoveStartBL')
  legBR.classList.add('legMoveStartBR')

  rectIrisR.classList.add('irisMove')
  rectIrisL.classList.add('irisMove')

  if (!lastTime) lastTime = time

  // Tiempo desde el ultimo frame
  const deltaTime = time - lastTime
  lastTime = time
  // Calcular el desplazamiento basado en el tiempo transcurrido
  const displacementPerMillisecond = stepSize / duration
  positionX += displacementPerMillisecond * deltaTime
  console.log('position', positionX)

  // Aplicar desplazamiento y invertido
  golden.style.transform = side === 'r' ? `translateX(${positionX}px)` : `translateX(-${positionX}px) scaleX(-1)`
  console.log(positionX >= destination)

  goalPosition === null ? moveTo = destination : moveTo = goalPosition

  if (positionX >= moveTo || positionX > window.innerWidth) {
    goalPosition += destination
    lastTime = null

    legFL.classList.remove('legMoveStartFL')
    legFR.classList.remove('legMoveStartFR')
    legBL.classList.remove('legMoveStartBL')
    legBR.classList.remove('legMoveStartBR')

    rectIrisR.classList.remove('irisMove')
    rectIrisL.classList.remove('irisMove')

    return
  }

  requestAnimationFrame(time => move(side, destination, time))
}

const state = value => {
  const golden = document.getElementById('Golden')
  const imgBody = document.getElementById('imgBody')
  const divHead = document.getElementById('divHead')
  const imgHead = document.getElementById('imgHead')
  const rectIrisR = document.getElementById('rectIrisR')
  const rectIrisL = document.getElementById('rectIrisL')
  const divMouth = document.getElementById('divMouth')
  const divLegs = document.getElementById('divLegs')
  const svgTail = document.getElementById('tail')

  switch (value) {
    case 'stop':{
      divLegs.innerHTML = ''
      const img = document.createElement('img')
      img.id = 'leftLegStop'
      img.src = './assets/svg/Golden/leftLeg.svg'
      img.alt = 'Golden left leg'
      divLegs.appendChild(img)
      break
    }

    case 'moveX':{
      // Cambiar Cuerpo
      imgBody.src = './assets/svg/Golden/BodyMoveX.svg'
      golden.classList.replace('bodyStop', 'bodyMove')

      // Cambiar Cabeza
      imgHead.src = './assets/svg/Golden/HeadMoveX.svg'
      divHead.classList.replace('headStop', 'headMove')

      // Cambiar Iris
      rectIrisR.classList.add('irisMove')
      rectIrisL.classList.add('irisMove')

      // Cambiar Boca
      divMouth.classList.add('divMouthMove')

      // Cambiar a Patas
      divLegs.innerHTML = ''
      // FL
      const imgFL = document.createElement('img')
      imgFL.id = 'legMoveStopFL'
      imgFL.src = './assets/svg/Golden/legMove.svg'
      divLegs.appendChild(imgFL)
      // FR
      const imgFR = document.createElement('img')
      imgFR.id = 'legMoveStopFR'
      imgFR.src = './assets/svg/Golden/legMove.svg'
      divLegs.appendChild(imgFR)
      // BL
      const imgBL = document.createElement('img')
      imgBL.id = 'legMoveStopBL'
      imgBL.src = './assets/svg/Golden/legMove.svg'
      divLegs.appendChild(imgBL)
      // BR
      const imgBR = document.createElement('img')
      imgBR.id = 'legMoveStopBR'
      imgBR.src = './assets/svg/Golden/legMove.svg'
      divLegs.appendChild(imgBR)

      // Cambiar Rabo
      svgTail.classList.replace('tailStop', 'tailMove')
      svgTail.classList.contains('tailWaggingStop-3') && svgTail.classList.replace('tailWaggingStop-3', 'tailWaggingMove-3')
      break
    }

    default:
      break
  }
}

state('moveX')

setInterval(() => {
  const letters = ['l', 'r']
  const selecdLetter = letters[Math.floor(Math.random() * letters.length)]
  console.log(selecdLetter)

  requestAnimationFrame(time => move(selecdLetter, 150, time))
}, 5000)

/*
const legWave = () => {
  const svgLeftLeg = document.getElementById('leftLegStop')

  svgLeftLeg.classList.toggle('legWave')
  setTimeout(() => {
    svgLeftLeg.classList.remove('legWave')
  }, 2500)
}

golden.addEventListener('click', legWave)
*/
