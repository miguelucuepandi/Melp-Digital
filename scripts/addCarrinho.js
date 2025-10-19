const btnAddProduto = document.querySelectorAll(".btnAdd")
const caixaPop = document.querySelector(".caixaPop")
const btnFecharPop = document.querySelectorAll(".btnFecharPop")
const popup = document.querySelector("#popAddProduto")

btnAddProduto.forEach(btnAdd => {
    btnAdd.addEventListener("click", (evt) => {
        evt.preventDefault()
        body.style.overflowY = "hidden"
        caixaPop.style.display = "flex"
    })
})

btnFecharPop.forEach(btnFechar => {
    btnFechar.addEventListener("click", (evt) => {
        evt.preventDefault()
        body.style.overflowY = "auto"
        caixaPop.style.display = "none"
    })
})

popup.addEventListener("click", (e) => {
    e.stopPropagation()
})

caixaPop.addEventListener("click", (e) => {
    body.style.overflowY = "auto"
    caixaPop.style.display = "none"
})