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

    return this.http.post('',form_data);//endpoint
  }
}
