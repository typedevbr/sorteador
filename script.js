async function sortear() {
  const container = document.querySelector('.results-container').classList.remove('hide')

  // Pegar o menor valor
  const min = Number(document.querySelector('#min').value)

  // Pegar o maior valor
  const max = Number(document.querySelector('#max').value)

  // Ver total de resultados
  const total = Number(document.querySelector('#total').value)

  for (let i = 0; i < 20; i++) {
    // Limpar conteúdo
    const results = document.querySelector('#results')
    results.innerHTML = ""

    for(let j = 0; j < total; j++) {
      // Sortear um número entre os dois
      const result = Math.floor(Math.random() * (max - min + 1)) + min

      // Substituir o resultado em tela
      const resultElement = document.createElement('div')
      resultElement.classList.add('result')
      resultElement.innerHTML = result
      results.append(resultElement)
    }

    await sleep(20)
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}