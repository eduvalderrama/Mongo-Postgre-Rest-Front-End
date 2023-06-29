import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CuentaBancaria } from '../models/cuentaBancaria.model';

const baseUrl = 'http://localhost:8094/rest/';

@Injectable({
    providedIn: 'root'
})

export class CuentaBancariaService {

    constructor(private http:HttpClient) { }

    getCuentasBancarias():Observable<CuentaBancaria[]>{
        return this.http.get<CuentaBancaria[]>(baseUrl+"busqueda/cuentasbancarias");
    }
}