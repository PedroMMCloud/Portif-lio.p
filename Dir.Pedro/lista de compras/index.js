const inputItem = document.getElementById("input-item");
const botaoAddItem = document.getElementById("adicionar-item");
const listaDeCompras = document.getElementById("listaD-compras");
const msgListaVazia = document.getElementById("mLista-vazia")

function criarItemLista() {
    event.preventDefault();
    if (inputItem.value === "") {
        alert("Lista vazia, pro favor adicione um item!");
        return
    }
}

function verificarListaV() {
    const itemDLista = listaDeCompras.querySelectorAll("li");
    if (itemDLista.length === 0) {
        msgListaVazia.style.display = "block";
    } else {
        msgListaVazia.style.display = "none";
    }
}

inputItem.addEventListener("click", () => {
    const itemLista = criarItemLista();
    listaDeCompras.appendChild(itemLista);
    verificarListaV(listaDeCompras);
})