import { Injectable } from '@angular/core';
import { Personaje } from './interfaces/personaje';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  private _listaPersonajes:Personaje[]=
  [
    {
      nombre:"Goku",
      poder:15000
    },
    {
      nombre:"Vegeta",
      poder:13000
    },

  ];

  get listaPersonajes():Personaje[]{
    return [...this._listaPersonajes];
  }

  agregarPersonaje(person:Personaje){
    this._listaPersonajes.push(person);
  }

  constructor() {

   }


   saludo():void{
    console.log('Hola desde servicio');
   }
}
