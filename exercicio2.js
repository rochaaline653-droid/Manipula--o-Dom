
function adicionarItem(texto) {
    const lista = document.getElementById("lista-tarefas");
    const novoItem = document.createElement("li");

    novoItem.textContent = texto;
    lista.appendChild(novoItem);
}

function adicionarItemDoCampo() {
    const campo = document.getElementById("campo-tarefa");
    const texto = campo.value.trim();

    if (texto === "") {
        alert("Digite uma tarefa!");
        return;
    }

    adicionarItem(texto);

    campo.value = "";
    campo.focus();
}
