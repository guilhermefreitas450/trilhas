

interface LivroBiblioteca {
    titulo: string;
    autor: string;
    genero: string;
    disponivel: boolean;
}

class BibliotecaGestao {
    private livros: LivroBiblioteca[] = [];
    adicionarLivro(livro: LivroBiblioteca): void {
        this.livros.push(livro);
    }

    filtrarPorGenero(genero: string): LivroBiblioteca[] {
        return this.livros.filter(livro => livro.genero === genero);
    }

    buscarPorAutor(autor: string): LivroBiblioteca[] {
        return this.livros.filter(livro => livro.autor === autor);
    }

    obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
        return this.livros.filter(livro => livro.disponivel)
            .sort((a, b) => a.titulo.localeCompare(b.titulo));
    }
}

const bibliotecaGestao = new BibliotecaGestao();
bibliotecaGestao.adicionarLivro({ titulo: "diario de um banana1", autor: "jeff kinney", genero: "humor", disponivel: true });
bibliotecaGestao.adicionarLivro({ titulo: "livro da kefera", autor: "kefera", genero: "drama", disponivel: false });
bibliotecaGestao.adicionarLivro({ titulo: "livro do rezendevil", autor: "rezendevil", genero: "ficcao", disponivel: true });

console.log(bibliotecaGestao.filtrarPorGenero("ficcao")); 
console.log(bibliotecaGestao.buscarPorAutor("kefera")); 
console.log(bibliotecaGestao.obterLivrosDisponiveisOrdenados());
