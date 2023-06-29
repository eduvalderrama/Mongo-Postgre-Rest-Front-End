import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCuentaBancariaComponent } from './components/list-cuenta-bancaria/list-cuenta-bancaria.component';


const routes: Routes = [
  {path:"listCuentaBancaria", component:ListCuentaBancariaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
