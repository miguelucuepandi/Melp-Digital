let itens = document.querySelectorAll("div.opcoes div.item");

function removerAtivoItem() {
    itens.forEach(item => {
        item.classList.remove("ativo")
    })
}

itens.forEach(item => {
    item.addEventListener("click", () => {
        removerAtivoItem()
        item.classList.add("ativo")
    })
})

