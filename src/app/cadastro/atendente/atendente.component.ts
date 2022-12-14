import { Component, OnInit } from '@angular/core';
import { AtendenteService } from 'src/app/service/atendente.service';

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
  
  public field_form = '';
  constructor(
    public atendente_service:AtendenteService
  ) { }

  ngOnInit(): void {
  }

  salvar(){
    if(this.dados.nome == ''){
      this.field_form = 'field-error';
      return;
    }
    this.atendente_service.salvar(this.dados)
    .subscribe();//faz o tratamento da requisição toda requisição é uma promise{metodo assíncrono}
  }
}
