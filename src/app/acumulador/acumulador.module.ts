import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PruebaComponent } from './prueba/prueba.component';
import { AcumuladorComponent } from './acumulador/acumulador.component';


@NgModule({
  declarations: [
    PruebaComponent,
    AcumuladorComponent
  ],
  exports:[
    PruebaComponent,
    AcumuladorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AcumuladorModule { }
