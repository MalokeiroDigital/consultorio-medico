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
  
  constructor(
    public atendente_service:AtendenteService
  ) { }

  ngOnInit(): void {
  }

  salvar(){
    this.atendente_service.salvar(this.dados);
  }
}
