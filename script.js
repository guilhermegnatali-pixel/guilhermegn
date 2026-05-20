// Pega do html o elemento com o id 'meuFormulario' e guarda na constante 'formulario'
const formulario = document.getElementById('meuFormulario');

// Pega a 'parede' onde os cards serão exibidos
const colecao = document.getElementById('colecao');

// Coloca um escutador no formulário
formulario.addEventListener('submit', function(evento) {

  // Previne o recarregamento da página (comportamento default do botão)
  evento.preventDefault();

  // 1. CAPTURAR: o JS busca e guarda os valores no objeto 'novo'
  const novo = {
    titulo: document.getElementById('titulo').value,
    imagem: document.getElementById('imagem').value,
    texto: document.getElementById('paragrafo').value
  };

  // 2. MONTAR o novo pedaço de html (use a crase!)
  const novoCard = `
    <div class="card">
      <img src="${novo.imagem}" alt="${novo.titulo}">
      <h3>${novo.titulo}</h3>
      <p>${novo.texto}</p>
    </div>
  `;

  // 3. EXIBIR: pendurar o card na parede
  colecao.innerHTML += novoCard;

  // 4. Limpar o formulário
  formulario.reset();

});
