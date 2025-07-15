function mostrarDataAtual(): void {
  const data = new Date();
  const opcoes: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dataFormatada = data.toLocaleDateString('pt-BR', opcoes);
  const elemento = document.getElementById("dataAtual");
  if (elemento) {
    elemento.textContent = `Hoje é ${dataFormatada}`;
  }
}

mostrarDataAtual();
