import { Component, OnInit } from '@angular/core';
import { CadastroService } from 'src/app/services/cadastro.service';
import { Produto } from 'src/app/models/produto';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})

export class CadastrarComponent implements OnInit {

  constructor(private service: CadastroService) {};

  produtos: Produto[] = [];
  produtosOriginal: Produto[] = [];

  listarProdutos(): void {
    this.service.getProdutosApi().subscribe(resposta => {
        this.produtosOriginal = resposta; // Adicione esta linha para inicializar this.produtosOriginal
        this.produtos = resposta;
  });
}

  ngOnInit(): void {
    this.listarProdutos();
  }
  
  
  
  
 
}