export interface Calificacion {
   
    id: string;
    idPedido: string;
    idCliente: string;
    idTienda: string;
    calificacionTienda: number;
    comentarioTienda: string;
    respuestaTendero: string;
    idDomiciliario: string;
    calificacionDomiciliario: number;
    comentarioDomiciliario: string;
    respuestaDomiciliario: string;
}

export type CrearCalificacionDto = Omit<Calificacion, "id">;
export type ActualizarCalificacionDto = Partial<Calificacion>;