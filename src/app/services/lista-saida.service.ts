import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaSaidaService {
 // private baseUrl = environment.apiUrl + "saida/";
  constructor(private http: HttpClient) { }
}
