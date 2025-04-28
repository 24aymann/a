import { Injectable } from '@angular/core';
import { Grupo } from '../clientes/clientes.model';

@Injectable({
  providedIn: 'root'
})
export class GruposService {
  private grupos: Grupo[] = [];

  constructor() {
    this.grupos = [
      {
        id: 0,
        nombre: 'Sin definir',
      },
      {
        id: 1,
        nombre: 'Activos',
      },
      {
        id: 2,
        nombre: 'No activos',
      },
      {
        id: 3,
        nombre: 'Deudores',
      },
    ];
  }

  getGrupos(): Grupo[] {
    return this.grupos;
  }
}
