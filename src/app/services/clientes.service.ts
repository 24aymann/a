import {Injectable} from '@angular/core';
import {Firestore, collection, addDoc, collectionData, doc, deleteDoc} from '@angular/fire/firestore';
import {Cliente} from '../clientes/clientes.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private firestore: Firestore) {}

  addCliente(cliente: Cliente) {
    const clienteRef = collection(this.firestore, 'clientes');
    return addDoc(clienteRef, cliente);
  }

  getClientes(): Observable<Cliente[]> {
    const clienteRef = collection(this.firestore, 'clientes');
    return collectionData(clienteRef, { idField: 'id' }) as Observable<Cliente[]>;
  }

  deleteCliente(cliente: Cliente) {
    const clienteDocRef = doc(this.firestore, `clientes/${cliente.id}`);
    return deleteDoc(clienteDocRef);
  }
}
