// Filtro da lista de posts (página Blog).
// Ao clicar em "Blog", "Análise", etc., só ficam visíveis os posts desse tipo.
// Também funciona através do endereço, por exemplo: /blog/?tipo=analise
// Se o JavaScript estiver desligado, a lista aparece completa.

(function () {
  var linhas = document.querySelectorAll("#lista-posts [data-tipo]");
  var botoes = document.querySelectorAll("#filtros [data-tipo]");

  function aplicar(tipo) {
    linhas.forEach(function (linha) {
      linha.hidden = tipo !== "todos" && linha.dataset.tipo !== tipo;
    });
    botoes.forEach(function (botao) {
      botao.classList.toggle("ativo", botao.dataset.tipo === tipo);
    });
  }

  botoes.forEach(function (botao) {
    botao.addEventListener("click", function (evento) {
      evento.preventDefault();
      aplicar(botao.dataset.tipo);
    });
  });

  // Se o endereço trouxer ?tipo=..., aplica esse filtro logo ao abrir a página
  var pedido = new URLSearchParams(window.location.search).get("tipo");
  var existe = Array.prototype.some.call(botoes, function (b) {
    return b.dataset.tipo === pedido;
  });
  aplicar(existe ? pedido : "todos");
})();
