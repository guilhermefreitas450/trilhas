
interface Livro {
    titulo: string;
    autor: string;
    disponivel: boolean;
}

class Biblioteca {
    private livros: Livro[] = [];
    adicionarLivro(livro: Livro): void {
        this.livros.push(livro);
    }

    buscarLivrosDisponiveis(): Livro[] {
        return this.livros.filter(livro => livro.disponivel);
    }
}

const biblioteca1 = new Biblioteca();
biblioteca1.adicionarLivro({ titulo: "diario de um banana", autor: "jeff kinney", disponivel: true });
biblioteca1.adicionarLivro({ titulo: "diario de um banana - rodriky é o cara", autor: "jeff kinney", disponivel: false});
console.log(biblioteca1.buscarLivrosDisponiveis());