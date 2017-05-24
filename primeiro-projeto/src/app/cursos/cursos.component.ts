import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;

  cursos: string[];

  //pode usar nomePortal: any;

  // constructor(private cursosService: CursosService) 
  // constructor(public cursosService: CursosService)

  //cursosService: CursosService

  constructor(private cursosService: CursosService) {

    this.nomePortal = 'https://google.com';

    // for (var i = 0; i < this.cursos.length; i++) {
    //   var curso = this.cursos[i];
    // }

    //var servico = new CursosService();

    //this.cursosService = cursosService;

    this.cursos = this.cursosService.getCursos();

  }

  ngOnInit() {
  }

}
