export interface Tiendas {

    id: string;
    nombre: string;
    direccion: string;
    telefono: string;
    idTendero: string;
    catalogoBasico: string;
    totalVentas: number;
}

export type crearTiendaDto = Omit<Tiendas, "id">;
export type actualizarTiendaDto = Partial<Tiendas>;