import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private url = 'https://localhost:44301/api/Clientes';

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    console.log("clientes service getClientes")
    return this.http.get<Cliente[]>(this.url);
  }

  getCliente(clienteId: string): Observable<Cliente> {
    console.log("clientes service getCliente")
    return this.http.get<Cliente>(this.url + '/' + clienteId);
  }

  postCliente(cliente: Cliente): Observable<Cliente> {
    console.log("clientes service postCliente")
    return this.http.post<Cliente>(this.url, cliente);
  }

  putCliente(cliente: Cliente): Observable<Cliente> {
    console.log("clientes service putCliente")
    return this.http.put<Cliente>(this.url + '/' + cliente.clienteId, cliente);
  }
}
