export interface GananciaDomiciliario {
    
    id: string;
    idDomiciliario: string;
    idPedido: string;
    ganancia: number;
    fechaEntrega: string;
}

export type CrearGananciaDomiciliarioDto = Omit<GananciaDomiciliario, "id">;
export type ActualizarGananciaDomiciliarioDto = Partial<GananciaDomiciliario>;