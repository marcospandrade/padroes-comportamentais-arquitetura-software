import { IUsuario, IUsuarioRepository } from "./IUsuarioRepository";

export class UsuarioRepository implements IUsuarioRepository {
  cadastrarUsuario(usuario: IUsuario): string {
    const usuarioCriado: IUsuario = usuario;

    return `Usuario: ${usuarioCriado.nome} criado`;
  }
}
