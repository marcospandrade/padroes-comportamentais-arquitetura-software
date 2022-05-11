export interface IUsuario {
  nome: string;
  idade: number;
}

export interface IUsuarioRepository {
  cadastrarUsuario(usuario: IUsuario): string;
}
