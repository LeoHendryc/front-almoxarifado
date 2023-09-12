import { Component } from '@angular/core';
import { NovaSaidaService } from 'src/app/services/nova-saida.service';
import { Produto } from 'src/app/models/produto';

@Component({
  selector: 'app-nova-saida',
  templateUrl: './nova-saida.component.html',
  styleUrls: ['./nova-saida.component.css']
})
export class NovaSaidaComponent {
  produtos: Produto[] = [];
  produtoSelecionado: number | undefined;

  constructor(private service: NovaSaidaService) {}

  
  ngOnInit(): void {
    this.listarProdutos();
  }

  listarProdutos() {
    this.service.getProdutos().subscribe((data: Produto[]) => {
      this.produtos = data;
    });
  }
}
