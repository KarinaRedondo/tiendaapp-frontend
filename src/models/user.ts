export interface User {

    id: string;
    nombreCompleto: string;
    correo: string;
    contrasena: string;
    rol: string;
    estado: string;
}

export type crearUsuarioDto = Omit<User, "id">;
export type actualizarUsuarioDto = Partial<User>;