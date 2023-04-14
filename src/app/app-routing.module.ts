import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaClientesComponent } from './pages/lista-clientes/lista-clientes.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastroClienteComponent } from './pages/cadastro-cliente/cadastro-cliente.component';
import { EdicaoClienteComponent } from './pages/edicao-cliente/edicao-cliente.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'clientes', component: ListaClientesComponent },
  { path: 'clientes/cadastrar', component: CadastroClienteComponent },
  { path: 'clientes/:cpf', component: EdicaoClienteComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
