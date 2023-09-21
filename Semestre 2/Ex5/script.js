// script.js
function cadastrarUsuario() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const sexo = document.getElementById('sexo').value;
    const dataNascimento = document.getElementById('dataNascimento').value;

    const usuario = {
        Nome: nome,
        Email: email,
        Telefone: telefone,
        Sexo: sexo,
        DataNascimento: dataNascimento
    };

    // Enviar 'usuario' para a camada de controle em C# (neste exemplo, será exibido no console)
    console.log(usuario);

    // Limpar o formulário
    document.getElementById('cadastroUsuarioForm').reset();
}
