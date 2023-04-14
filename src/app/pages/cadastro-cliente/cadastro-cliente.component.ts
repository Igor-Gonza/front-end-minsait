import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ICliente } from 'src/app/interfaces/cliente';
import { ClientesService } from 'src/app/services/clientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})

export class CadastroClienteComponent {
    clienteForm = new FormGroup({
    cpf: new FormControl('', Validators.required),
    nome: new FormControl('', Validators.required),
    telefone: new FormControl('', Validators.required),
    cep: new FormControl('', Validators.required),
    ruaEndereco: new FormControl('', Validators.required),
    numeroEndereco: new FormControl('', Validators.required),
    rendimentoMensal: new FormControl('', Validators.required)
  });

  constructor(private clienteService: ClientesService, private route: ActivatedRoute) {}

  cadastrar() {
    const cliente: ICliente = this.clienteForm.value as ICliente;
    this.clienteService.cadastrarCliente(cliente).subscribe((result) => {
      this.clienteForm.reset();
      Swal.fire('Sucesso!', 'O usuário foi cadastrado com sucesso!', 'success');
      return result;
    }, (error) => {
      Swal.fire('Ops...', error.error.message, 'error');
      return error;
    });
  }
}
