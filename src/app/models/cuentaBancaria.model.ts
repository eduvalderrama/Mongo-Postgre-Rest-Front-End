import { Banco } from "./banco.model";
import { TipoMoneda } from "./tipoMoneda.model";

export class CuentaBancaria {
    idCuentaBancaria?:number;
    flag?:number;
    numero?:string;
    idUsuario?:number;
    banco?:Banco;
    tipoMoneda?:TipoMoneda;
}