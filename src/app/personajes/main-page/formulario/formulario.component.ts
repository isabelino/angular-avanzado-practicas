import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje';
import { PersonajesService } from '../../personajes.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: [
  ]
})
export class FormularioComponent {

 // @Input() listaFormulario:Personaje[]=[];
 constructor(private servicio:PersonajesService){
 }
  nuevo:Personaje = {
    nombre:"",
    poder:0
  }

  @Output() nuevoPersonaje:EventEmitter<Personaje> = new EventEmitter();

  agregar():void{
    console.log("envio de formulario");
    console.log(this.nuevo);
    //this.listaFormulario.push(this.nuevo);
    this.servicio.agregarPersonaje(this.nuevo);
    this.nuevoPersonaje.emit(this.nuevo);
    this.nuevo={
      nombre:'',
      poder:0
    }

  }

}
