function classificarHeroi() {
  const nickname = document.getElementById('nickname').value.trim()
  const xp = parseInt(document.getElementById('xp').value)
  const resultadoDiv = document.getElementById('resultado')

  if (!nickname || isNaN(xp)) {
    resultadoDiv.textContent = 'Por favor, preencha todos os campos corretamente.'
    resultadoDiv.style.color = 'red'
    return
  }

  let nivel = ''

  if (xp >= 10001) {
    nivel = 'Radiante'
  } else if (xp >= 9001) {
    nivel = 'Imortal'
  } else if (xp >= 8001) {
    nivel = 'Ascendente'
  } else if (xp >= 7001) {
    nivel = 'Platina'
  } else if (xp >= 5001) {
    nivel = 'Ouro'
  } else if (xp >= 2001) {
    nivel = 'Prata'
  } else if (xp >= 1001) {
    nivel = 'Bronze'
  } else {
    nivel = 'Ferro'
  }

  resultadoDiv.style.color = '#00ffcc'
  resultadoDiv.textContent = `O Herói de nome ${nickname} está no nível de ${nivel}.`
}
