import { Component, OnInit } from '@angular/core';
import { NovoProdutoService } from 'src/app/services/novo-produto.service';
import { Produto } from 'src/app/models/produto';
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.css']
})
export class NovoProdutoComponent implements OnInit {
  novoProduto: Produto = new Produto();
  produtoCadastrado: boolean = false;

  constructor(private NovoProdutoService: NovoProdutoService) { }

  ngOnInit(): void {
  }

  cadastrarProduto(formulario: NgForm): void {
    // Verifica se o formulário é válido
    if (formulario.valid) {
      // Chama o serviço para cadastrar o novo produto
      this.NovoProdutoService.cadastrarProduto(this.novoProduto).subscribe(
        (produtoCadastrado) => {
          console.log('Produto cadastrado com sucesso:', produtoCadastrado);
          // Limpa os campos do formulário
          formulario.resetForm();
        },
        (erro) => {
          console.error('Erro ao cadastrar o produto:', erro);
        }
      );
    }
    this.produtoCadastrado = true;
  }
}
