import { LogService } from './../shared/log.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CursosService {

  emitirCursoCriado: EventEmitter<string> = new EventEmitter<string>();

  cursos: string[] = ['Java', 'Angular2', 'Phonegap'];

  constructor(private logService: LogService) { 
    console.log("CursosService");
  }

  getCursos() {
    this.logService.consoleLog("getCursos");
    return this.cursos;
  }

  addCurso(curso: string) {
    this.logService.consoleLog(`addCurso ${curso}`);
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
  }

}
