import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { Cliente } from 'src/app/interfaces/cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit {

  clientes: Cliente[] = [];
  showError: boolean = false;

  constructor(private clientesService: ClientesService, private router: Router) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    /*this.clientesService.getClientes()
      .pipe(
        tap(res => console.log(res))
      )
      .subscribe*/

      this.clientesService.getClientes().subscribe(res => this.onGetSuccess(res), err => this.onError(err))
  }

  onGetSuccess(clientes: Cliente[]): void {
    console.log('onGetSuccess: ' + clientes) 
    this.clientes = clientes;
  }

  onError(err: any){
    console.error(err)
    this.showError = true
  }

  editar(clienteId: string) {
    this.router.navigate(['/guardar-cliente/' + clienteId])
  }

  nuevo() {
    this.router.navigate(['/guardar-cliente/'])
  }

}
