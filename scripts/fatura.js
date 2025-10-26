let itemTotal = document.querySelectorAll(".itemTotal")
let totalGeral = document.querySelector(".totalGeral")
let btnImprimir = document.querySelector(".btnImprimir")
let itemValor = 0

itemTotal.forEach(itemT => {
    let itemPrecoUnit = 0
    let itemQtd = 0
    itemPrecoUnit = itemT.previousElementSibling.textContent
    itemQtd = itemT.previousElementSibling.previousElementSibling.textContent
    itemT.innerHTML = formatarDinheiro(itemPrecoUnit * itemQtd)
    itemValor += (itemPrecoUnit * itemQtd)
})
totalGeral.textContent = formatarDinheiro(itemValor)

btnImprimir.addEventListener("click", (evt) => {
    evt.preventDefault()
    window.print()
})