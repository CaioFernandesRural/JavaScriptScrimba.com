let contagem = 0;
let contagemEl = document.getElementById("contagem");
let entradasEl = document.getElementById("entradas");

function aumento() {
    contagem += 1;
    contagemEl.textContent = contagem;
}
function salvar() {
    entradasEl.textContent += contagem + " - ";
    contagemEl.textContent = contagem = 0;
}