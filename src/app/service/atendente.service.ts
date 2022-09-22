import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AtendenteService {

  constructor(
    public http:HttpClient
  ) { }

  salvar(dados:any){
    let form_data = new FormData();
    form_data.append('dados',dados);

    this.http.post('http://localhost:8080/atendente',form_data);//endpoint
  }
}