import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/models/produto';

@Injectable({
  providedIn: 'root'
})
export class NovoProdutoService {

  
  baseUrl : string =  "http://localhost:8080/api/produtos/dto";

  constructor(private http: HttpClient) { }

  public cadastrarProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.baseUrl, produto);
  }

  
}
