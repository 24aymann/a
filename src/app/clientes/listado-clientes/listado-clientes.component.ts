import {Component, OnInit} from '@angular/core';
import { ClientesService } from '../clientes.service';
import { Cliente } from '../clientes.model';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-listado-clientes',
  providers: [ ClientesService ],
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './listado-clientes.component.html',
  styleUrl: './listado-clientes.component.css'
})
export class ListadoClientesComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
    this.clientes = this.clientesService.getClientes();
  }
}
