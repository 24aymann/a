import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ClientesModule } from './clientes/clientes.module';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    ClientesModule,
    AppComponent,
  ],
  providers: [],
})
export class AppModule { }
