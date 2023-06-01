import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Cuenta } from 'src/app/interfaces/cuenta';

@Component({
  selector: 'app-cuentas-list',
  templateUrl: './cuentas-list.component.html',
  styleUrls: ['./cuentas-list.component.css']
})
export class CuentasListComponent implements OnInit {

  @Input('cuentas') cuentas!: Cuenta[]
  @Output() verCuenta = new EventEmitter<Cuenta>()
  
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log('cuentas list onChanges', changes)
  }

  ngOnInit(): void {
  }

  ver(cuenta: Cuenta){
    this.verCuenta.emit(cuenta);
  }
}
