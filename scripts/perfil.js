const btnAbrirPop = document.querySelectorAll(".btnAbrirPop")
const caixaPop = document.querySelector(".caixaPop")
const btnFecharPop = document.querySelectorAll(".btnFecharPop")
const popup = document.querySelectorAll(".popup")
const btnEditar = document.querySelectorAll('.btnEditar')

function fecharPop() {
    popup.forEach(pop => {
        pop.style.display = "none"
    })
    body.style.overflowY = "auto"
    caixaPop.style.display = "none"
}

function abrirPop(valorBtn, btnEditar = false) {
    popup.forEach(pop => {
        let valorPop = pop.getAttribute("valor")
        
        if (valorBtn == valorPop) {
            body.style.overflowY = "hidden"
            caixaPop.style.display = "flex"
            pop.style.display = "flex"
            
            if (btnEditar) {
                if (valorBtn == "popAddProduto") {
                    editarDadosProduto(btnEditar, pop)
                } else if (valorBtn == "popAddServico") {
                    // extrairDadosFormServico(pop) 
                } else if (valorBtn == "popAddMusica") {
                    // extrairDadosFormMusica(pop) 
                } else if (valorBtn == "popAddArtigo") {
                    // extrairDadosFormArtigo(btn)
                }
            }
        } else {
            pop.style.display = "none"
        }
    })
}

function editarDadosProduto(btnEditar, popAddProduto) {
    let tituloCabecalhoForm = popAddProduto.children[0].children[0]
    let tituloForm = popAddProduto.children[1].children[1]
    let categoriaForm = popAddProduto.children[1].children[3].children[0]
    let precoForm = popAddProduto.children[1].children[5]
    let descricaoForm = popAddProduto.children[1].children[9]
    let idForm = popAddProduto.children[1].children[10]
    let btnSubmitForm = popAddProduto.children[1].children[11].children[1]

    let cardPai = btnEditar.parentElement.parentElement
    let tituloCard = cardPai.children[1].children[0].textContent
    let categoriaCard = cardPai.children[1].children[1].children[0]
    let precoCard = cardPai.children[1].children[2].children[0].textContent
    let idCard = cardPai.children[2].textContent
    let descricaoCard = cardPai.children[3].textContent
    
    // Colocando os dados no formulário de produtos 
    tituloCabecalhoForm.textContent = "Actualizar dados do produto"
    tituloForm.value = tituloCard
    categoriaForm.appeChild = categoriaCard
    precoForm.value = precoCard
    descricaoForm.value = descricaoCard
    idForm.value = idCard
    btnSubmitForm.textContent = "Actualizar"
    btnSubmitForm.name = "btnSubmitActualizarProduto"
}

function limparDadosFormProduto(btnEditar, popAddProduto) {
    let tituloCabecalhoForm = popAddProduto.children[0].children[0]
    let tituloForm = popAddProduto.children[1].children[1]
    let categoriaForm = popAddProduto.children[1].children[3].children[0]
    let precoForm = popAddProduto.children[1].children[5]
    let descricaoForm = popAddProduto.children[1].children[9]
    let idForm = popAddProduto.children[1].children[10]
    let btnSubmitForm = popAddProduto.children[1].children[11].children[1]

    // Limpar os dados no formulário de produtos 
    tituloCabecalhoForm.textContent = "Adicionar novo Produto"
    tituloForm.value = ""
    categoriaForm.appeChild = ""
    precoForm.value = ""
    descricaoForm.value = ""
    idForm.value = ""
    btnSubmitForm.textContent = "Adicionar"
    btnSubmitForm.name = "btnSubmitAddProduto"
}


// Percorre todos os botoes de abertura do pop-up
btnAbrirPop.forEach(btnAbrir => {
    btnAbrir.addEventListener("click", (evt) => {
        evt.preventDefault()
        let valorBtn = btnAbrir.getAttribute("valor")
        abrirPop(valorBtn)
    })
})

// Percorre todos os botoes de abertura do pop-up de editar
btnEditar.forEach(btn => {
    btn.addEventListener("click", (evt) => {
        evt.preventDefault()
        let valorBtn = btn.getAttribute("valor")
        abrirPop(valorBtn, btn)
    })
})


// Percorre todos os botoes de fechamento do pop-up
btnFecharPop.forEach(btnFechar => {
    btnFechar.addEventListener("click", (evt) => {
        evt.preventDefault()
        fecharPop() 
    })
})

// Código para não fechar quando o pop-up é clicado
popup.forEach(pop => {
    pop.addEventListener("click", (e) => {
        e.stopPropagation()
    })
})

// Fecha o pop-up quando é clicado fora do mesmo
caixaPop.addEventListener("click", (e) => {
    fecharPop() 
})

