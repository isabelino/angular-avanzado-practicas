import { Component } from "@angular/core";


@Component({
  selector:'app-acumulador',
  templateUrl:'./acumulador.component.html'
})
export class AcumuladorComponent{

  titulo = 'Acumulador';
  numero:number = 10;
  base:number=10;

 acumulador(valor:number){
   this.numero += valor;
 }

}
