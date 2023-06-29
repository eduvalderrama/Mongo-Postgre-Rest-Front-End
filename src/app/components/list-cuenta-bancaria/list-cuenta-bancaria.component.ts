import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from "@angular/material/table";
import { CuentaBancaria } from "src/app/models/cuentaBancaria.model";
import { CuentaBancariaService } from "src/app/services/cuentaBancaria.service";

@Component({
    selector: 'app-list-cuenta-bancaria',
    templateUrl: './list-cuenta-bancaria.component.html',
    styleUrls: ['./list-cuenta-bancaria.component.scss']
})
export class ListCuentaBancariaComponent implements OnInit {
    cuentasBancarias: CuentaBancaria [] = [];
    dataSource: any;
    desactivePaginator = true;

    @ViewChild(MatPaginator,{static:true}) paginator!:MatPaginator;

    constructor(private cuentaBancariaService:CuentaBancariaService) {
    }

    ngOnInit(): void {
        this.listaCuentasBancarias();
    }

    displayedColumns=[
    'idcuenta',
    'numero',
    'flag',
    'banco',
    'moneda',
    ];

    listaCuentasBancarias(){
    this.cuentaBancariaService.getCuentasBancarias().subscribe(
        x =>{
            if(x.length>=10){
                this.desactivePaginator = false;
            }
            this.cuentasBancarias = x
            this.dataSource= new MatTableDataSource<any>(this.cuentasBancarias);
            this.dataSource.paginator = this.paginator;
        } 
    )
    }
}
