import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/interfaces/cliente';
import { Cuenta } from 'src/app/interfaces/cuenta';

@Component({
  selector: 'app-guardar-cuenta',
  templateUrl: './guardar-cuenta.component.html',
  styleUrls: ['./guardar-cuenta.component.css']
})
export class GuardarCuentaComponent implements OnInit {

  title: string = ''
  formGuardarCuenta!: FormGroup
  saldoRegex = /^-?\d*[.,]?\d{0,2}$/;

  @Input('clientes') clientes!: Cliente[]
  @Input('cuentaForm') cuenta!: Cuenta
  @Input('modoEdit') modoEdit!: boolean
  @Output() public cuentaGuardar = new EventEmitter<Cuenta>();
  @Output() limpiarForm = new EventEmitter();

  constructor(private formBuilder: FormBuilder){
    this.initForm();
  }
  
  ngOnInit(): void {
    
  }

  initForm(){
    this.title = 'Insertar Cuenta'
    this.formGuardarCuenta = this.formBuilder.group({
      cuentaId: [null],
      clienteId: [null, [Validators.required]],
      numero: [null, [Validators.required, Validators.minLength(10)]],
      tipo: [null, [Validators.required]],
      activa: [true],
      saldo: [null, [Validators.required, Validators.pattern(this.saldoRegex)]],
    });
  }

  guardar(){
    console.log('this.formGuardarCuenta.value', this.formGuardarCuenta.value)
    
    let cuenta: Cuenta = {
      cuentaId: this.formGuardarCuenta.value.cuentaId,
      clienteId: this.formGuardarCuenta.value.clienteId,
      numero: this.formGuardarCuenta.value.numero,
      tipo: this.formGuardarCuenta.value.tipo,
      activa: this.formGuardarCuenta.value.activa,
      saldo: this.formGuardarCuenta.value.saldo
    };

    this.cuentaGuardar.emit(cuenta);
    this.initForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('cuentas list onChanges', changes)
    
    if(this.modoEdit && changes['cuenta'].currentValue){
      this.title = 'Editar Cuenta'
      this.formGuardarCuenta.setValue({
        cuentaId: changes['cuenta'].currentValue.cuentaId,
        clienteId: changes['cuenta'].currentValue.cuentaId,
        numero: changes['cuenta'].currentValue.numero,
        tipo: changes['cuenta'].currentValue.tipo,
        activa: changes['cuenta'].currentValue.activa,
        saldo: changes['cuenta'].currentValue.saldo
      })
    }
  }

  limpiar(){
    this.initForm();
    this.limpiarForm.emit();
  }
}
