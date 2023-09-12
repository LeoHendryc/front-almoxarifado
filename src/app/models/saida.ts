import { Produto } from "./produto";

export class Saida {
    id: number;
    produto: Produto;
    quantidade: number;
    dataSaida: Date;

    constructor() {
        this.id = 0;
        this.produto = new Produto();
        this.quantidade = 0;
        this.dataSaida = new Date();
    }
}