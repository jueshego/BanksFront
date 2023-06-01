import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardarClienteComponent } from './components/cliente/forms/guardar-cliente/guardar-cliente.component';
import { ClientesListComponent } from './components/cliente/listar/clientes-list/clientes-list.component';
import { CuentasComponent } from './components/cuenta/cuentas.component';

const routes: Routes = [
  { path: 'listar-clientes', component: ClientesListComponent },
  { path: 'guardar-cliente', component: GuardarClienteComponent },
  { path: 'guardar-cliente/:clienteId', component: GuardarClienteComponent },
  { path: 'cuentas', component: CuentasComponent },
  { path: '**', redirectTo: '', pathMatch : 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
