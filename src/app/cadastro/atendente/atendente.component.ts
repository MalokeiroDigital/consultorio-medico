import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atendente',
  templateUrl: './atendente.component.html',
  styleUrls: ['./atendente.component.scss']
})
export class AtendenteComponent implements OnInit {

  //variavel de sistema 
  public dados: any = {
    id:0,
    nome: ''
  };
  
  constructor() { }

  ngOnInit(): void {
  }

  salvar(){
    console.log(this.dados.nome);
  }
}
