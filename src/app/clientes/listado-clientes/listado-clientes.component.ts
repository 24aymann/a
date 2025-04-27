import { Component, OnInit } from '@angular/core';
import {Cliente, Grupo} from '../clientes.model';
import { ClientesService } from '../clientes.service';
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
  grupos: Grupo[] = [];

  constructor(private clientesService: ClientesService) {}

  ngOnInit(): void {
    this.clientes = this.clientesService.getClientes();
    this.grupos = this.clientesService.getGrupos();
  }
}
