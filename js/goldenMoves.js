const SvgGolden = document.getElementById('Golden')
const SvgleftLeg = document.getElementById('leftLeg')

const legWave = () => {
  SvgleftLeg.classList.toggle('legWave')
  setTimeout(() => {
    SvgleftLeg.classList.remove('legWave')
  }, 2500)
}

SvgGolden.addEventListener('click', legWave)
