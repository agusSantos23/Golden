const state = value => {
  const golden = document.getElementById('Golden')
  const imgBody = document.getElementById('imgBody')
  const divHead = document.getElementById('divHead')
  const imgHead = document.getElementById('imgHead')
  const divEyes = document.getElementById('divEyes')
  const rectIrisR = document.getElementById('rectIrisR')
  const rectIrisL = document.getElementById('rectIrisL')
  const divMouth = document.getElementById('divMouth')
  const divLegs = document.getElementById('divLegs')
  const svgTail = document.getElementById('tail')

  switch (value) {
    case 'stop':{
      // Cambiar Cuerpo
      imgBody.src = './assets/svg/Golden/bodyStop.svg'
      golden.classList = ''
      golden.classList.add('bodyStop')

      // Cambiar Cabeza
      imgHead.src = './assets/svg/Golden/headStop.svg'
      divHead.classList = ''
      divHead.classList.add('headStop')

      /// Cambiar Ojos
      divEyes.style.display = 'block'
      rectIrisR.classList.remove('irisMove')
      rectIrisL.classList.remove('irisMove')

      // Cambiar Boca
      divMouth.style.display = 'block'
      divMouth.classList.remove('divMouthMove')

      // Cambiar a Pata
      divLegs.innerHTML = ''
      const img = document.createElement('img')
      img.id = 'leftLegStop'
      img.src = './assets/svg/Golden/rightLeg.svg'
      img.alt = 'Golden left leg'
      divLegs.appendChild(img)

      // Cambiar Rabo
      svgTail.classList.replace('tailMove', 'tailStop')
      svgTail.classList.contains('tailWaggingMoveX-3') && svgTail.classList.replace('tailWaggingMoveX-3', 'tailWaggingStop-3')
      break
    }

    case 'moveX':{
      // Cambiar Cuerpo
      imgBody.src = './assets/svg/Golden/bodyMoveX.svg'
      golden.classList = ''
      golden.classList.add('bodyMoveX')

      // Cambiar Cabeza
      imgHead.src = './assets/svg/Golden/headMoveX.svg'
      divHead.classList = ''
      divHead.classList.add('headMoveX')

      // Cambiar Ojos
      divEyes.style.display = 'block'
      rectIrisR.classList.add('irisMove')
      rectIrisL.classList.add('irisMove')

      // Cambiar Boca
      divMouth.style.display = 'block'
      divMouth.classList.add('divMouthMoveX')

      // Cambiar a Patas
      divLegs.innerHTML = ''
      // FL
      const imgFL = document.createElement('img')
      imgFL.id = 'legMoveStopXFL'
      imgFL.src = './assets/svg/Golden/legMove.svg'
      divLegs.appendChild(imgFL)
      // FR
      const imgFR = document.createElement('img')
      imgFR.id = 'legMoveStopXFR'
      imgFR.src = './assets/svg/Golden/legMove.svg'
      divLegs.appendChild(imgFR)
      // BL
      const imgBL = document.createElement('img')
      imgBL.id = 'legMoveStopXBL'
      imgBL.src = './assets/svg/Golden/legMove.svg'
      divLegs.appendChild(imgBL)
      // BR
      const imgBR = document.createElement('img')
      imgBR.id = 'legMoveStopXBR'
      imgBR.src = './assets/svg/Golden/legMove.svg'
      divLegs.appendChild(imgBR)

      // Cambiar Rabo
      svgTail.classList = ''
      svgTail.classList.add('tailMoveX')
      svgTail.classList.add('tailWaggingMoveX-3')
      break
    }

    case 'moveB':{
      // Cambiar Cuerpo
      imgBody.src = './assets/svg/Golden/bodyMoveB.svg'
      golden.classList = ''
      golden.classList.add('bodyMoveB')

      // Cambiar Cabeza
      imgHead.src = './assets/svg/Golden/headStop.svg'
      divHead.classList = ''
      divHead.classList.add('headMoveB')

      divEyes.style.display = 'block'

      // Cambiar Boca
      divMouth.style.display = 'block'
      divMouth.classList.replace('divMouthMoveX', 'divMouthStop')

      // Cambiar a Patas
      divLegs.innerHTML = ''
      // FL
      const imgFL = document.createElement('img')
      imgFL.id = 'legMoveStopBFL'
      imgFL.src = './assets/svg/Golden/leftLeg.svg'
      divLegs.appendChild(imgFL)
      // FR
      const imgFR = document.createElement('img')
      imgFR.id = 'legMoveStopBFR'
      imgFR.src = './assets/svg/Golden/rightLeg.svg'
      divLegs.appendChild(imgFR)
      // BL
      const imgBL = document.createElement('img')
      imgBL.id = 'legMoveStopBBL'
      imgBL.src = './assets/svg/Golden/leftLeg.svg'
      divLegs.appendChild(imgBL)
      // BR
      const imgBR = document.createElement('img')
      imgBR.id = 'legMoveStopBBR'
      imgBR.src = './assets/svg/Golden/rightLeg.svg'
      divLegs.appendChild(imgBR)

      // Cambiar Rabo
      svgTail.classList = ''
      svgTail.classList.add('tailStop')
      svgTail.classList.add('tailWaggingMoveY-3')
      break
    }

    case 'moveT':{
      // Cambiar Cuerpo
      imgBody.src = './assets/svg/Golden/bodyMoveT.svg'
      golden.classList = ''
      golden.classList.add('bodyMoveT')

      // Cambiar Cabeza
      imgHead.src = './assets/svg/Golden/headMoveT.svg'
      divHead.classList = ''
      divHead.classList.add('headMoveT')

      // Cambiar Ojos
      divEyes.style.display = 'none'

      // Cambiar Boca
      divMouth.style.display = 'none'

      // Cambiar a Patas
      divLegs.innerHTML = ''
      // FL
      const imgFL = document.createElement('img')
      imgFL.id = 'legMoveStopTFL'
      imgFL.src = './assets/svg/Golden/legMoveT.svg'
      divLegs.appendChild(imgFL)
      // FR
      const imgFR = document.createElement('img')
      imgFR.id = 'legMoveStopTFR'
      imgFR.src = './assets/svg/Golden/legMoveT.svg'
      divLegs.appendChild(imgFR)
      // BL
      const imgBL = document.createElement('img')
      imgBL.id = 'legMoveStopTBL'
      imgBL.src = './assets/svg/Golden/legMoveT.svg'
      divLegs.appendChild(imgBL)
      // BR
      const imgBR = document.createElement('img')
      imgBR.id = 'legMoveStopTBR'
      imgBR.src = './assets/svg/Golden/legMoveT.svg'
      divLegs.appendChild(imgBR)

      // Cambiar Rabo
      svgTail.classList = ''
      svgTail.classList.add('tailMoveT')
      svgTail.classList.add('tailWaggingMoveY-3')
    }
  }
}

export default state
