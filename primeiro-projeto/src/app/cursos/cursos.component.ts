import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;

  cursos: string[] = ['C#', 'Nodejs', 'Angular']

  //pode usar nomePortal: any;

  constructor() {
    this.nomePortal = 'https://google.com';

    for (var i = 0; i < this.cursos.length; i++) {
      var curso = this.cursos[i];
    }

  }

  ngOnInit() {
  }

}
