import { Component, OnInit  } from '@angular/core';
import { EntradaService } from 'src/app/services/entrada.service';
import { Produto } from 'src/app/models/produto';


@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit{
  produtos: Produto[] = [];
  constructor(private service: EntradaService) {};
  ngOnInit(): void {
  
  }

}
