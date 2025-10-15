const btnLimparCarrinho = document.querySelector(".btnLimparCarrinho");

btnLimparCarrinho.addEventListener("click", (evt) => {
    evt.preventDefault()
    let resp = window.confirm("Deseja limpar o carrinho?")
    if (resp) {
        alert("Carrinho limpo com sucesso!")
    }
})