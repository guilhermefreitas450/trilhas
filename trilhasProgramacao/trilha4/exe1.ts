
interface Produto {
    id: number;
    nome: string;
    preco: number;
}

class ItemLoja implements Produto {
    constructor(public id: number, public nome: string, public preco: number) {}
}

const produto1 = new ItemLoja(1, "ps5 pro", 5600.0);
console.log(produto1);