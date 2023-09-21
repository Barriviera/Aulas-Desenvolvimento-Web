using System;
using System.Collections.Generic;

namespace CadastroUsuarios.DAO
{
    public class UsuarioDAO
    {
        private static List<POJO.Usuario> usuarios = new List<POJO.Usuario>();

        public void InserirUsuario(POJO.Usuario usuario)
        {
            // Gere um ID único para o usuário (pode ser um número sequencial).
            usuario.Id = usuarios.Count + 1;
            usuarios.Add(usuario);
        }

        public List<POJO.Usuario> ObterUsuarios()
        {
            return usuarios;
        }
    }
}
