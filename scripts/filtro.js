let botoes = document.querySelectorAll("section#filtro aside.botoes button");
let itens = document.querySelectorAll("section#filtro aside.itens div.item");

function removerAtivoBtn() {
    botoes.forEach(botao => {
        botao.classList.remove("ativo")
    })
}

function mostrarItem(valorBtn) {
    itens.forEach(item => {
        let valorItem = item.getAttribute("valor")
        if (valorBtn == "todos") {
            item.style.display = "block"
        } else if (valorBtn == valorItem) {
            item.style.display = "block"
        }
        else {
            item.style.display = "none"
        }
    })
}

window.onload = () => {
    if (localStorage.valorBtn) {
        removerAtivoBtn()
        botoes.forEach(botao => {
            let valorBtn = botao.getAttribute("valor")
            if (valorBtn == localStorage.valorBtn) {
                botao.classList.add("ativo")
            }
        })
        mostrarItem(localStorage.valorBtn)
    } else {
        mostrarItem("todos")
    }
}

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        // Pega o atributo valor do botão clicado
        let valorBtn = botao.getAttribute("valor")
        localStorage.valorBtn = valorBtn
        removerAtivoBtn()
        botao.classList.add("ativo")
        mostrarItem(valorBtn)
    })
})

