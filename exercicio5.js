
const botao = document.getElementById("btn-exibir");

botao.addEventListener("click", function() {
    const nome = document.getElementById("campo-nome").value;
    const resposta = document.getElementById("resposta");

    resposta.textContent = "Olá, " + nome + "! Seja bem-vindo(a)!";
});
