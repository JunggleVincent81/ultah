// app.js

document.addEventListener('DOMContentLoaded', () => {
  const celebrateBtn = document.getElementById('celebrateBtn')

  if (celebrateBtn) {
    celebrateBtn.addEventListener('click', () => {
      startConfetti()
    })
  }

  function startConfetti() {
    const confettiContainer = document.getElementById('confetti-container')
    if (!confettiContainer) {
      return
    }

    confettiContainer.innerHTML = '' // Clear previous confetti

    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FF33A8']

    for (let i = 0; i < 150; i++) { // Increased number of confetti for a more festive effect
      const confetti = document.createElement('div')
      confetti.classList.add('confetti')
      confetti.style.left = Math.random() * 100 + 'vw'
      confetti.style.width = `${Math.random() * 10 + 5}px`
      confetti.style.height = `${Math.random() * 10 + 5}px`
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
      confetti.style.transform = `rotate(${Math.random() * 360}deg)`
      confetti.style.animationDuration = Math.random() * 3 + 2 + 's'
      confetti.style.animationDelay = Math.random() * 2 + 's'
      confettiContainer.append(confetti)
    }

    setTimeout(() => {
      confettiContainer.innerHTML = '' // Remove confetti after animation
    }, 7000) // Increased duration to allow confetti to linger a bit longer
  }
})
