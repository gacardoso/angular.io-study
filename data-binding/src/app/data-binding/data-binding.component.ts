import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  //styleUrls: ['./data-binding.component.css']
  styles: [
    `
    .highlight{
      background-color: yellow;
      font-weight: bold;
    }
    `
  ]
})
export class DataBindingComponent implements OnInit {

  url: string = 'https://google.com';
  cursoAngular: boolean = true;
  urlImagem: string = 'http://lorempixel.com/400/200/nature/';

  valorAtual: string = '';
  valorSalvo = '';

  isMouseOver: boolean = false;

  nome:String = 'abc';

  pessoa: any = {
    nome: 'def',
    idade: 20
  }

  getValor() {
    return 1;
  };

  getCurtirCurso() {
    return true;
  }

  onKeyUp(evento: KeyboardEvent) {
    //console.log(evento);
    //console.log((<HTMLInputElement>evento.target).value);

    this.valorAtual = (<HTMLInputElement>evento.target).value;

  };

  salvarValor(valor){
    this.valorSalvo = valor;
  };

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  };

  constructor() { }

  ngOnInit() {
  }

  botaoClicado() {
    alert('Botão clicado!');
  }

} 
