import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AcumuladorModule } from './acumulador/acumulador.module';
import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { PersonajesModule } from './personajes/personajes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    AcumuladorModule,
    PersonajesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
