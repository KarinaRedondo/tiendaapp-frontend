export interface Pedido {
    
    id: string;
    idCliente: string;
    idTienda: string;
    descripcionPedido: string;
    montoTotal: number;
    precioDomicilio: number;
    estado: string;
    idDomiciliario: string;
    gananciaDomiciliario: number;
    comentariosTendero: string;
    fechaCreacion: string;
    fechaExpiracion: string;
}

export type CrearPedidoDto = Omit<Pedido, "id">;
export type ActualizarPedidoDto = Partial<Pedido>;