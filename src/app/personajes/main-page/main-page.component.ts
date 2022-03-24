import { Component } from '@angular/core';
import { Personaje } from '../interfaces/personaje';
import { PersonajesService } from '../personajes.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styles: [
  ]
})
export class MainPageComponent {

  constructor( private servicio:PersonajesService ){
    servicio.saludo();
  }

 /* listaPersonajes:Personaje[]=
  [
    {
      nombre:"Goku",
      poder:15000
    },
    {
      nombre:"Vegeta",
      poder:13000
    },

  ];*/

  recibeNuevoPersonaje( personaje:Personaje){
    console.log("Soy el padre",personaje);
  }





}
