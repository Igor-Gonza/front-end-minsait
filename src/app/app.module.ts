import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ListaClientesComponent } from './pages/lista-clientes/lista-clientes.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastroClienteComponent } from './pages/cadastro-cliente/cadastro-cliente.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EdicaoClienteComponent } from './pages/edicao-cliente/edicao-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ListaClientesComponent,
    HomeComponent,
    CadastroClienteComponent,
    EdicaoClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
