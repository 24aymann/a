import { Component } from '@angular/core';
import {ListadoClientesComponent} from './clientes/listado-clientes/listado-clientes.component';
import {AltaClienteComponent} from './clientes/alta-cliente/alta-cliente.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    ListadoClientesComponent,
    AltaClienteComponent
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ParcialAngular';
}
