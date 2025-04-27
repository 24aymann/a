import { NgModule } from '@angular/core';
import { ClientesModule } from './clientes/clientes.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule, ClientesModule
  ]
})

export class ClienteModule { }
