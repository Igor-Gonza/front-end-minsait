import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/environment';
import { ICliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  api = environment.api;
  endpoint = 'clientes';

  constructor(private http: HttpClient) { }

  cadastrarCliente(cliente: ICliente) {
    return this.http.post<ICliente>(`${this.api}/${this.endpoint}`, cliente);
  }

  retornarTodosCliente() {
    return this.http.get<ICliente[]>(`${this.api}/${this.endpoint}`);
  }

  retornarClientePorCpf(cpf: string) {
    return this.http.get<ICliente>(`${this.api}/${this.endpoint}/${cpf}`)
  }

  atualizarCliente(cpf: string, cliente: ICliente) {
    return this.http.put<ICliente>(`${this.api}/${this.endpoint}/${cpf}`, cliente);
  }

  deletarCliente(cpf: string) {
    return this.http.delete<any>(`${this.api}/${this.endpoint}/${cpf}`);
  }
}
