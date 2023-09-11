import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class EntradaService {
  baseUrl : string =  "http://localhost:8080/api/entrada/dto";

  constructor(private http: HttpClient) { }

  listarEntradas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/lista`);
  }

  cadastrarEntrada(entrada: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/novo`, entrada);
  }

  obterListaDeProdutos(): Observable<Produto[]> {
    // Implemente a lógica para obter a lista de produtos da sua API
    return this.http.get<Produto[]>(`${this.baseUrl}/produtos`);
  }
}
