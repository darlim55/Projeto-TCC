function mostrarDataAtual() {
    var data = new Date();
    var opcoes = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var dataFormatada = data.toLocaleDateString('pt-BR', opcoes);
    var elemento = document.getElementById("dataAtual");
    if (elemento) {
        elemento.textContent = "Hoje \u00E9 ".concat(dataFormatada);
    }
}
mostrarDataAtual();
