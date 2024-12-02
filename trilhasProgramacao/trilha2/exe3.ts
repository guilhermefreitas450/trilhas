class Produto {
    protected nome: String;
    protected preco: number;
    protected qtd: number;

    constructor(nome: string, preco: number, qtd: number) {
        this.nome = nome;
        this.preco = preco;
        this.qtd = qtd;
    }
    infoP(): string {
        return `produto: ${this.nome}\npreço: R$${this.preco}\nquantidade:${this.qtd}`;
    }

    calcValorTotal(): number {
        return this.preco * this.qtd;
    }

}

const produto1 = new Produto("ps5 pro", 6500.0, 4);
console.log(produto1.infoP());
console.log(`valor total dos produtos: R$${produto1.calcValorTotal()}`);