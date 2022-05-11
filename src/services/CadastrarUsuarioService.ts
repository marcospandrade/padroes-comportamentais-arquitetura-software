import {
  IUsuario,
  IUsuarioRepository,
} from "../repositories/IUsuarioRepository";

export class CadastrarUsuarioService {
  constructor(private usuarioRepo: IUsuarioRepository) {}

  execute(usuario: IUsuario) {
    const response = this.usuarioRepo.cadastrarUsuario(usuario);

    return response;
  }
}
