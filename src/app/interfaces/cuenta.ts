import { Cliente } from "./cliente"

export interface Cuenta {
    cuentaId: string,
    numero: string,
    tipo: string
    activa: boolean,
    saldo: number,
    clienteId: string
    cliente?: Cliente
}