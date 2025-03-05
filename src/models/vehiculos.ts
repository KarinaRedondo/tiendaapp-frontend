export interface Vehiculo {
    
    id: string;
    idDomiciliario: string;
    tipo: string;
    placa: string;
    marca: string;
    modelo: string;
    capacidadCarga: number;
}

export type CrearVehiculoDto = Omit<Vehiculo, "id">;
export type ActualizarVehiculoDto = Partial<Vehiculo>;
