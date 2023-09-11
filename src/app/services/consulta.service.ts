import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/models/produto';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor(private http: HttpClient) { }

  baseUrl : string =  "http://localhost:8080/api/produtos/dto";

  public getProdutosApi() : Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseUrl);
  }
}
