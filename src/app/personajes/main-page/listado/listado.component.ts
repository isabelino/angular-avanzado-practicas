import { Component, Input } from '@angular/core';
import { Personaje } from '../../interfaces/personaje';
import { PersonajesService } from '../../personajes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent  {

  //@Input() lista:Personaje[]=[];

  constructor(private servicio:PersonajesService){

  }

  get lista(){
    return this.servicio.listaPersonajes;
  }

}
