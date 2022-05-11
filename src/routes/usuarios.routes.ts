import { Router } from "express";
import { CadastrarUsuarioService } from "../services/CadastrarUsuarioService";
import { UsuarioRepository } from "../repositories/UsuarioRepository";

const usuarioRoutes = Router();

const cadastrarUsuarioRepository = new UsuarioRepository();

usuarioRoutes.post("/criarUser", (req, res) => {
  const { nome, idade } = req.body;

  const cadastrarUsuarioService = new CadastrarUsuarioService(
    cadastrarUsuarioRepository
  );

  const response = cadastrarUsuarioService.execute({ nome, idade });

  return res.status(200).json(response);
});

export { usuarioRoutes };
