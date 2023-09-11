import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/models/produto';


@Injectable({
  providedIn: 'root'
})
export class NovaSaidaService {
  baseUrl : string =  "http://localhost:8080/api/produtos/dto";
  constructor(private http: HttpClient) { }

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseUrl);
  }
}
