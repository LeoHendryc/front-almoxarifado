import { Produto } from "./produto";

export class Entrada {
    id: number;
    dataEntrada: Date;
    quantidade: number;
    produtoId: Produto;

    constructor() {
        this.id = 0;
        this.dataEntrada = new Date();
        this.quantidade = 0;
        this.produtoId = new Produto();
    }
}