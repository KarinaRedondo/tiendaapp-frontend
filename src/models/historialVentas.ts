export interface HistorialVenta {
    
    id: string;
    idTienda: string;
    fecha: string;
    ventasDiarias: number;
    ventasSemanales: number;
    ventasMensuales: number;
}

export type CrearHistorialVentaDto = Omit<HistorialVenta, "id">;
export type ActualizarHistorialVentaDto = Partial<HistorialVenta>;