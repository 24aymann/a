import {Component, OnInit} from '@angular/core';
import { ClientesService } from '../clientes.service';
import { Cliente, Grupo } from '../clientes.model';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-alta-cliente',
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './alta-cliente.component.html',
  styleUrl: './alta-cliente.component.css'
})
export class AltaClienteComponent implements OnInit {
  cliente: Cliente = {} as Cliente;
  grupos: Grupo[] = [];

  constructor(private clientesService: ClientesService) {}

  ngOnInit() {
    this.cliente = this.clientesService.nuevoCliente();
    this.grupos = this.clientesService.getGrupos();
  }

  nuevoCliente(): void {
    this.clientesService.addClientes(this.cliente);
    this.cliente = this.clientesService.nuevoCliente();
  }
}
