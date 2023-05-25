type Usuario = {
    nome: string,
    email: string,
    cpf: string,
    rg: string
    dataNacimento?: string
}

type UsuarioSemRG = Omit<Usuario, 'rg'>;
type UsuarioObrigatorio = Required<UsuarioSemRG>

const cadastrarUsuário = (info: UsuarioSemRG): UsuarioSemRG => {
    return info;
}