const inputItem = document.querySelector("#input-item");
const botaoAddItem = document.getElementById("adicionar-item");
const listaDeCompras = document.getElementById("listaD-compras");
const msgListaVazia = document.getElementById("container-lista");
let contador = 0;


botaoAddItem.addEventListener("click", (evento) => {
    evento.preventDefault();
    if (inputItem.value === "") {
        alert("Lista vazia, pro favor adicione um item!");
        return
    }
    
})

const IdaLista = document.createElement("li");

IdaLista.textContent = inputItem;
listaDeCompras.appendChild(IdaLista);

const containerItemDlista = document.createElement("div");
containerItemDlista.classList.add("mLista-vazia");

const iptCheckbox = document.createElement("input");
const nItem = document.createElement("p");

iptCheckbox.type = "checkbox";
iptCheckbox.id = "checkbox-" + contador++;

nItem.innerText = inputItem.value;

iptCheckbox.addEventListener("click", function () {
    if (iptCheckbox.checked) {
        nItem.style.textDecoration = "line-through";
    } else {
        nItem.style.textDecoration = "none";
    }
});

containerItemDlista.appendChild(iptCheckbox);
containerItemDlista.appendChild(nItem);

IdaLista.appendChild(containerItemDlista);
