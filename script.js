const dino = document.querySelector('.dino')
const background = document.querySelector('.background')

let isJumping = false
let position = 0

function handleKeyUp(event) {
  if (event.keyCode === 32) {
    if (!isJumping) jump()
  }
}

function jump() {
  isJumping = true

  let upInterval = setInterval(() => {
    if (position >= 150) {
      clearInterval(upInterval)

      // Descendo
      let downInterval = setInterval(() => {
        if (position <= 0) {
          clearInterval(downInterval)
          isJumping = false
        } else {
          position -= 20
          dino.style.bottom = position + 'px'
        }
      }, 20)
    } else {
      // Subindo
      position += 20
      dino.style.bottom = position + 'px'
    }
  }, 20)
}
function createCactus() {
  const cactus = document.createElement('div')
  let cactusPosition = 1000
  cactus.classList.add('cactus')
  background.appendChild(cactus)
  cactus.style.left = cactusPosition + 'px'
}

createCactus()
document.addEventListener('keyup', handleKeyUp)
