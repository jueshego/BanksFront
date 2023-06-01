import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cuenta } from '../interfaces/cuenta';

@Injectable({
  providedIn: 'root'
})
export class CuentasService {

  private url = 'https://localhost:44301/api/Cuentas';

  constructor(private http: HttpClient) { }

  getCuentas(): Observable<Cuenta[]> {
    console.log("Cuentas service getCuentas")
    return this.http.get<Cuenta[]>(this.url);
  }

  getCuenta(cuentaId: string): Observable<Cuenta> {
    console.log("Cuenta service getCuenta")
    return this.http.get<Cuenta>(this.url + '/' + cuentaId);
  }

  postCuenta(cuenta: Cuenta): Observable<Cuenta> {
    console.log("Cuenta service postCuenta")
    return this.http.post<Cuenta>(this.url, cuenta);
  }

  putCuenta(cuenta: Cuenta): Observable<Cuenta> {
    console.log("Cuentas service putCuenta")
    return this.http.put<Cuenta>(this.url + '/' + cuenta.cuentaId, cuenta);
  }
}
