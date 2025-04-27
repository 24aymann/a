import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClientesService } from './clientes.service';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';
import {ListadoClientesComponent} from './listado-clientes/listado-clientes.component';

@NgModule({
  declarations: [],
  providers: [
    ClientesService
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [
    AltaClienteComponent, ListadoClientesComponent
  ]
})
export class ClientesModule { }
