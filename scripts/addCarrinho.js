const btnAbrirPop = document.querySelectorAll(".btnAbrirPop")
const caixaPop = document.querySelector(".caixaPop")
const btnFecharPop = document.querySelectorAll(".btnFecharPop")
const popup = document.querySelectorAll(".popup")

function fecharPop() {
    popup.forEach(pop => {
        pop.style.display = "none"
    })
    body.style.overflowY = "auto"
    caixaPop.style.display = "none"
}

function abrirPop(valorBtn) {
    popup.forEach(pop => {
        let valorPop = pop.getAttribute("valor")
        
        if (valorBtn == valorPop) {
            body.style.overflowY = "hidden"
            caixaPop.style.display = "flex"
            pop.style.display = "flex"
        } else {
            pop.style.display = "none"
        }
    })
}

btnAbrirPop.forEach(btnAbrir => {
    btnAbrir.addEventListener("click", (evt) => {
        evt.preventDefault()
        let valorBtn = btnAbrir.getAttribute("valor")
        abrirPop(valorBtn)
    })
})

btnFecharPop.forEach(btnFechar => {
    btnFechar.addEventListener("click", (evt) => {
        evt.preventDefault()
        fecharPop()
    })
})

popup.forEach(pop => {
    pop.addEventListener("click", (e) => {
        e.stopPropagation()
    })
})

caixaPop.addEventListener("click", (e) => {
    fecharPop()
})