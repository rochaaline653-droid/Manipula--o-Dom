function removerPrimeiraNotificacao() {
    const lista = document.getElementById("notificacoes");

    if (lista && lista.firstElementChild) {
        lista.firstElementChild.remove();
    }
}
