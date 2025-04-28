import { Component, OnInit } from '@angular/core';
import {Cliente} from '../clientes.model';
import { ClientesService } from '../../services/clientes.service';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  imports: [
    NgForOf,
    NgIf
  ],
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(private clientesService: ClientesService) {}

  ngOnInit(): void {
    this.clientesService.getClientes().subscribe(clientes => {
      this.clientes = clientes;
    });
  }

  async onClickDelete(cliente: Cliente) {
    const response = await this.clientesService.deleteCliente(cliente);
    console.log(response);
  }
}
