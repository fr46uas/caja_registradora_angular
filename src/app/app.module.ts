import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { ComandaComponent } from './comanda/comanda.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ListaProductosComponent,
    ComandaComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
