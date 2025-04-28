import {Component, OnInit} from '@angular/core';
import { ClientesService } from '../../services/clientes.service';
import { Cliente, Grupo } from '../clientes.model';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgForOf} from '@angular/common';
import {GruposService} from '../../services/grupos.service';

@Component({
  selector: 'app-alta-cliente',
  imports: [
    FormsModule,
    NgForOf,
    ReactiveFormsModule
  ],
  templateUrl: './alta-cliente.component.html',
  styleUrl: './alta-cliente.component.css'
})
export class AltaClienteComponent implements OnInit {
  cliente: Cliente = {} as Cliente;
  grupos: Grupo[] = [];

  formulario: FormGroup;

  constructor(private clientesService: ClientesService, private gruposService: GruposService) {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      cif: new FormControl(),
      direccion: new FormControl(),
      grupo: new FormControl(),
    })
  }

  ngOnInit() {
    this.grupos = this.gruposService.getGrupos();
  }

  async onSubmit() {
    console.log(this.formulario.value);
    const response = await this.clientesService.addCliente(this.formulario.value);
    console.log(response);
  }
}
