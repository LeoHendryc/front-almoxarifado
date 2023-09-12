import { Component, OnInit } from '@angular/core';
import { ConsultaService } from 'src/app/services/consulta.service';
import { Produto } from 'src/app/models/produto';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})

export class ConsultarComponent implements OnInit {

  constructor(private service: ConsultaService) {};

  produtos: Produto[] = [];

  listarProdutos(): void {
    this.service.getProdutosApi().subscribe(resposta => {
        this.produtosOriginal = resposta; // Adicione esta linha para inicializar this.produtosOriginal
        this.produtos = resposta;
  });
}

  ngOnInit(): void {
    this.listarProdutos();
  }
  
  produtosOriginal: Produto[] = [];
  
  
  filtrarProdutos(input: string): void {
    if (input.trim() === '') {
      // Se o campo de entrada estiver vazio, atribua a lista original de volta aos produtos
      this.produtos = this.produtosOriginal.slice(); // Crie uma cópia da lista original
    } else {
      // Caso contrário, aplique a filtragem com base no texto de entrada
      this.produtos = this.produtosOriginal.filter(p => p.nome.toLowerCase().includes(input.toLowerCase()));
    }
  }
}