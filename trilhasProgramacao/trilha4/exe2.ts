

interface Documento {
    titulo: string;
    conteudo: string;
}

class Texto implements Documento {
    constructor(public titulo: string, public conteudo: string) {}

    exibir(): string {
        return `titulo: ${this.titulo}, conteudo: ${this.conteudo}`;
    }
}

const texto1 = new Texto("introdução", "esse é o conteudo:");
console.log(texto1.exibir());
