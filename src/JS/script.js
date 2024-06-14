function salvarCadastro() {
	// Obtém os valores dos campos do formulário
	const nome = document.getElementById("nome").value;
	const email = document.getElementById("email").value;
	const senha = document.getElementById("senha").value;
	const error = document.querySelector(".error-signin");
	const telefone = document.getElementById("telefone").value;

	// Cria um objeto com os dados do cadastro
	const cadastro = {
		nome: nome,
		email: email,
		senha: senha,
		telefone: telefone,
	};

	// Converte o objeto para uma string JSON
	const cadastroJSON = JSON.stringify(cadastro);

	// Armazena a string JSON no local storage
	localStorage.setItem("cadastro", cadastroJSON);

	fetch("http://127.0.0.1:8080/registro", {
		method: "POST",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			name: nome,
			email: email,
			password: senha,
			phone_number: telefone
		})
	}).then(res => {
		if (res.status == 201) {
			alert("Cadastro salvo com sucesso!");
			window.location.href = "http://127.0.0.1:8080/cadastrado";
		} else {
			error.innerHTML = "Usuário já existe!";
		}
	})

}
