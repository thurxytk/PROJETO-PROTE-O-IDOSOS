// Selecionar elementos do DOM
let btnAjuda = document.querySelector(".botao-ajuda");
let btnFechar = document.querySelector(".botao-fechar");
let modal = document.querySelector(".modal-fundo");

// Adicionar eventos de clique aos botões
btnAjuda.addEventListener("click", abreModal);
btnFechar.addEventListener("click", fechaModal);

// Função para abrir o modal
function abreModal() {
    modal.style.display = "block";
}

// Função para fechar o modal
function fechaModal() {
    modal.style.display = "none";
}
