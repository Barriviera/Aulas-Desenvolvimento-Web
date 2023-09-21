using System;
using System.Collections.Generic;

class Program
{
    static List<Usuario> listaUsuarios = new List<Usuario>();

    static void Main()
    {
        while (true)
        {
            Console.WriteLine("Aguardando dados do JavaScript...");
            string dados = Console.ReadLine();
            
            if (dados == "exit")
            {
                break;
            }

            // Converter os dados JSON recebidos do JavaScript em um objeto Usuario
            Usuario usuario = Newtonsoft.Json.JsonConvert.DeserializeObject<Usuario>(dados);

            // Adicionar o usuário à lista de usuários
            listaUsuarios.Add(usuario);

            // Exibir a lista de usuários
            Console.WriteLine("Lista de Usuários Cadastrados:");
            foreach (var u in listaUsuarios)
            {
                Console.WriteLine($"ID: {u.Id}, Nome: {u.Nome}, Email: {u.Email}, Telefone: {u.Telefone}, Sexo: {u.Sexo}, Data de Nascimento: {u.DataNascimento}");
            }
        }
    }
}
