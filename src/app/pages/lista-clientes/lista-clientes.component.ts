import { Component, Input } from '@angular/core';
import { ICliente } from 'src/app/interfaces/cliente';
import { ClientesService } from 'src/app/services/clientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent {
  listaVazia: boolean = false;
  clientes: ICliente[] = [];
  constructor(private clienteService: ClientesService) { }

  ngOnInit() {
    this.clienteService.retornarTodosCliente().subscribe((result: ICliente[]) => {
      this.clientes = result;
      this.listaVazia = result.length === 0;
    })
  }

  deletarCliente(cpf: string) {
    Swal.fire({
      title: 'Você quer mesmo deletar este cliente?',
      showCancelButton: true,
      confirmButtonColor: 'red',
      confirmButtonText: 'Deletar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.clienteService.deletarCliente(cpf).subscribe((result) => {
          this.clientes = this.clientes.filter((cliente) => {
            Swal.fire('Sucesso!', 'Cliente deletado com sucesso', 'success')
            return cliente.cpf !== cpf ? cliente : null;
          })
          this.listaVazia = this.clientes.length === 0;
        });
      }
    })

  }
  private confirmaDeletar(cpf: string) {

  }
}
