import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente';
import { Cuenta } from 'src/app/interfaces/cuenta';
import { ClientesService } from 'src/app/services/clientes.service';
import { CuentasService } from 'src/app/services/cuentas.service';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.css']
})
export class CuentasComponent implements OnInit {
 
  cuentas: Cuenta[] = []
  cuentaEdit!: Cuenta
  clientes!: Cliente[] 
  showError: boolean = false;
  showSuccess : boolean = false;
  modoEdit: boolean = false;

  constructor(private cuentassService: CuentasService, private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.init()
    this.getClientes()
  }

  init(){
    this.modoEdit = false;
    this.getAll();
  }

  getAll(){
    /*this.cuentassService.getClientes()
      .pipe(
        tap(res => console.log(res))
    ).subscribe*/

    this.cuentassService.getCuentas().subscribe(res => this.onGetCuentas(res), err => this.onError(err))
  }

  getClientes(){
    this.clientesService.getClientes().subscribe(res => this.onGetClientes(res), err => this.onError(err))
  }

  onGetCuentas(cuentas: Cuenta[]): void {
    console.log('onGetSuccess: ' + cuentas) 
    this.cuentas = cuentas;
  }

  onGetClientes(clientes: Cliente[]): void {
    console.log('onGetSuccess: ' + clientes) 
    this.clientes = clientes;
  }

  onError(err: any){
    console.error(err)
    this.showError = true
    this.showSuccess = false
  }

  guardar(cuenta: Cuenta){
    console.log('cuenta', cuenta)

    if(!this.modoEdit){
      this.cuentassService.postCuenta(cuenta)
        .subscribe(res => this.onSaveSuccess(res), err => this.onError(err))
    } else {
      this.cuentassService.putCuenta(cuenta)
        .subscribe(res => this.onSaveSuccess(res), err => this.onError(err))
    }
  }

  editar(cuenta: Cuenta){
    this.modoEdit = true
    this.cuentaEdit = cuenta;
  }

  onSaveSuccess(res: Cuenta): void {
    this.showError = false
    this.showSuccess = true
    this.init();
  }
}
