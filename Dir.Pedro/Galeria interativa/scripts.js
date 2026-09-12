const fotos = document.querySelectorAll(".foto");
const modal = document.querySelector("#modal");

const imagemAmpliada = document.querySelector("#imagem-ampliada");

const fechar = document.querySelector("#fechar");

fotos.forEach(foto => { 
    foto.addEventListener("click", () => { 
        const imagem = foto.querySelector("img"); 
        imagemAmpliada.src = imagem.src;
        imagemAmpliada.alt = imagem.alt; 
        modal.classList.add("aberto"); 
    }); 
}); 
fechar.addEventListener("click", () => { 
    modal.classList.remove("aberto"); 
});