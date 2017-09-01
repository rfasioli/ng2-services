import { LogService } from './shared/log.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';
import { CursosService } from "app/cursos/cursos.service";
import { ReceberCursosCriadoComponent } from './receber-cursos-criado/receber-cursos-criado.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    CriarCursoComponent,
    ReceberCursosCriadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CursosService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
