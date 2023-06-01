import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/shared/header/header.component';
import { MaterialModule } from './material.module';
import { MenuComponent } from './components/shared/menu/menu.component';
import { PageComponent } from './components/shared/page/page.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientesListComponent } from './components/cliente/listar/clientes-list/clientes-list.component';
import { GuardarClienteComponent } from './components/cliente/forms/guardar-cliente/guardar-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GuardarCuentaComponent } from './components/cuenta/forms/guardar-cuenta/guardar-cuenta.component';
import { CuentasListComponent } from './components/cuenta/listar/cuentas-list/cuentas-list.component';
import { CuentasComponent } from './components/cuenta/cuentas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    PageComponent,
    ClientesListComponent,
    GuardarClienteComponent,
    CuentasComponent,
    GuardarCuentaComponent,
    CuentasListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
