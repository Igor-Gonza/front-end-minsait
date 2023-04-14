import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ICliente } from 'src/app/interfaces/cliente';
import { ClientesService } from 'src/app/services/clientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edicao-cliente',
  templateUrl: './edicao-cliente.component.html',
  styleUrls: ['./edicao-cliente.component.css']
})
export class EdicaoClienteComponent {
  cpfCliente: string = '';
  clienteForm = new FormGroup({
    cpf: new FormControl(''),
    nome: new FormControl('', Validators.required),
    telefone: new FormControl('', Validators.required),
    cep: new FormControl('', Validators.required),
    ruaEndereco: new FormControl('', Validators.required),
    numeroEndereco: new FormControl('', Validators.required),
    rendimentoMensal: new FormControl('', Validators.required)
  });

  constructor(private clienteService: ClientesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.cpfCliente = String(this.route.snapshot.paramMap.get('cpf'));
    this.clienteService.retornarClientePorCpf(this.cpfCliente).subscribe((result: ICliente) => {
      this.clienteForm.setValue({
        cpf: this.cpfCliente,
        nome: result.nome,
        telefone: result.telefone,
        cep: result.cep,
        ruaEndereco: result.ruaEndereco,
        numeroEndereco: result.numeroEndereco,
        rendimentoMensal: result.rendimentoMensal
      });
    }, (error) => {
      Swal.fire('Ops...', error.error.message, 'error');
      return error;
    })
  }

  atualizar() {
    const cliente: ICliente = this.clienteForm.value as ICliente;
    this.cpfCliente = String(this.route.snapshot.paramMap.get('cpf'))
    this.clienteService.atualizarCliente(this.cpfCliente, cliente).subscribe((result) => {
      Swal.fire('Sucesso!', 'O usuário foi atualizado com sucesso!', 'success');
      return result;
    }, (error) => {
      Swal.fire('Ops...', error.error.message, 'error');
      return error;
    });
  }
}
