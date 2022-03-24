import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { ListadoComponent } from './main-page/listado/listado.component';
import { FormularioComponent } from './main-page/formulario/formulario.component';
import { PersonajesService } from './personajes.service';


@NgModule({
  declarations: [
    MainPageComponent,
    ListadoComponent,
    FormularioComponent
  ],
  exports:[
    MainPageComponent,
    ListadoComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers:[
    PersonajesService
  ]
})
export class PersonajesModule { }
