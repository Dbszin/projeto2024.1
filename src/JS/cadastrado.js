// Função para carregar e exibir os dados do cadastro
function exibirDadosCadastro() {
  // Obtém os dados do local storage
  const cadastroJSON = localStorage.getItem("cadastro");

  if (cadastroJSON) {
    // Converte a string JSON de volta para um objeto
    const cadastro = JSON.parse(cadastroJSON);

    // Exibe o nome e o email do usuário
    const mensagem = `Olá, ${cadastro.nome}!  Obrigado por fazer parte desse projeto!`;
    document.getElementById("mensagem").textContent = mensagem;
  } else {
    // Caso não haja dados no local storage
    document.getElementById("mensagem").textContent =
      "Nenhum cadastro encontrado.";
  }
}

// Função para enviar os dados do formulário
function enviarDados() {
  // Obtém os valores dos campos do formulário
  const endereco = document.getElementById("endereco").value;
  const servico = document.getElementById("servico").value;

  // Verifica se todos os campos estão preenchidos
  if (endereco && servico) {
    // Cria um objeto com os dados do endereço e serviço
    const dadosAdicionais = {
      endereco: endereco,
      servico: servico,
    };

    // Converte o objeto para uma string JSON
    const dadosAdicionaisJSON = JSON.stringify(dadosAdicionais);

    // Armazena a string JSON no local storage
    localStorage.setItem("dadosAdicionais", dadosAdicionaisJSON);

    // Exibe uma mensagem de confirmação
    alert("Dados enviados com sucesso!");
  } else {
    // Exibe uma mensagem de erro se algum campo estiver vazio
    alert("Por favor, preencha todos os campos.");
  }
}

// Chama a função ao carregar a página
window.onload = exibirDadosCadastro;
