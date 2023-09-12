import { Component, EventEmitter, Output } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { NovaEntradaService } from 'src/app/services/nova-entrada.service';





@Component({
  selector: 'app-nova-entrada',
  templateUrl: './nova-entrada.component.html',
  styleUrls: ['./nova-entrada.component.css']
})
export class NovaEntradaComponent {

  produtos: Produto[] = [];
  produtoSelecionado: number | undefined;
  

  constructor(private service: NovaEntradaService) {}

  
  ngOnInit(): void {
    this.listarProdutos();
  }

  listarProdutos() {
    this.service.getProdutos().subscribe((data: Produto[]) => {
      this.produtos = data;
    });
  }

  
}


