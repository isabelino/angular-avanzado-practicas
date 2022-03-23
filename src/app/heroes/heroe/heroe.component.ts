import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent  {

heroes:string[] = ["Spiderman","Ironman"
,"Thor","Hulk","Capitan Amirica","Antman"];

heroesEliminados:string[]=[];

heroeBorrado:string | undefined;

borrarHeroe():void{
  this.heroeBorrado = "adios "+this.heroes.pop();
  this.heroesEliminados.push(this.heroeBorrado);
}




}
