import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-guardar-cliente',
  templateUrl: './guardar-cliente.component.html',
  styleUrls: ['./guardar-cliente.component.css']
})
export class GuardarClienteComponent implements OnInit {

  model = {
    clienteId: '',
    identificacion: '',
    nombre: '',
    fecha: ''
  }

  title: string = 'Insertar Cliente'

  showSuccess : boolean = false;
  showError: boolean = false;
  
  format = 'yyyy-MM-dd'
  locale = 'en-US'

  constructor(private activatedRoute: ActivatedRoute, private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.showError = this.showSuccess = false;
    this.activatedRoute.params.subscribe(params => {
      var id = params['clienteId']

        if(id === undefined){
          this.title = 'Insertar Cliente'
          return;
        }

      this.editar(id)
    })
  }

  editar(clienteId: string) {
    this.title = 'Editar Cliente'
    this.showError = this.showSuccess = false;
    this.clientesService.getCliente(clienteId)
      .subscribe(res => this.fillForm(res))
  }

  fillForm(cliente: Cliente): void {
    const formattedDate = formatDate(cliente.fechaNacimiento, this.format, this.locale)
    
    this.model.clienteId = cliente.clienteId
    this.model.identificacion = cliente.identificacion
    this.model.nombre = cliente.nombre
    this.model.fecha = formattedDate
  }

  guardar(){
    this.showError = this.showSuccess = false;

    let cliente : Cliente = { 
      clienteId : this.model.clienteId, 
      identificacion : this.model.identificacion,  
      nombre : this.model.nombre,
      fechaNacimiento : this.model.fecha
    }
    
    if(this.model.clienteId.length > 0) {
      this.clientesService.putCliente(cliente)
        .subscribe(res => this.onSaveSuccess(res), err => this.onError(err))
    } else {
      this.clientesService.postCliente(cliente)
        .subscribe(res => this.onSaveSuccess(res))
    }
  }

  onSaveSuccess(cliente: Cliente) {
    this.showSuccess = true
  }

  onError(err: any){
    this.showError = true
    console.error('guardar eror', err) 
  }

}
