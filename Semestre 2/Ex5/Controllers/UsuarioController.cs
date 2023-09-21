using Microsoft.AspNetCore.Mvc;
using CadastroUsuarios.DAO;
using CadastroUsuarios.POJO;

namespace CadastroUsuarios.Controllers
{
    public class UsuarioController : Controller
    {
        private UsuarioDAO usuarioDAO = new UsuarioDAO();

        public IActionResult Cadastro()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Cadastrar(Usuario usuario)
        {
            if (ModelState.IsValid)
            {
                usuarioDAO.InserirUsuario(usuario);
                return RedirectToAction("GridUsuarios");
            }
            return View("Cadastro", usuario);
        }

        public IActionResult GridUsuarios()
        {
            var usuarios = usuarioDAO.ObterUsuarios();
            return View(usuarios);
        }
    }
}
