import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';
import { ClientesService } from './clientes.service';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    FormsModule,
    AltaClienteComponent,
    ListadoClientesComponent
  ],
  providers: [
    ClientesService
  ],
  exports: [
    AltaClienteComponent,
    ListadoClientesComponent
  ]
})
export class ClientesModule { }
