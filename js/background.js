const createCloud = () => {
  const cloud = document.createElement('img')
  cloud.classList.add('cloud')

  const randomValueNumber = parseFloat((Math.random() * (2 - 0.9) + 0.9).toFixed(1))

  cloud.src = './assets/svg/background/cloud.svg'
  cloud.style.setProperty('--start-y', `${Math.floor(Math.random() * (200 - 50) + 50)}%`)
  cloud.style.setProperty('--end-y', `${Math.floor(Math.random() * (200 - 50) + 50)}%`)
  cloud.style.setProperty('--scale', randomValueNumber)

  document.body.appendChild(cloud)

  setTimeout(() => {
    cloud.remove()
  }, 30000)
}

setInterval(() => {
  createCloud()
}, Math.floor(Math.random() * (45000 - 3000) + 3000))
