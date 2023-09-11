export class Produto {
  constructor() {
    this.idProduto;
    this.nome = '';
    this.unidadeId = '';
    this.siglaUnidade = '';
  }

  idProduto!: number;
  nome: string;
  unidadeId: string;
  siglaUnidade: string;
}