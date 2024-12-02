class Livro{
    protected titulo: String;
    protected autor: String;
    protected pgs: number;
    protected lido: boolean;

    constructor(titulo:String, autor:String, pgs:number, lido:boolean){
        this.titulo=titulo;
        this.autor=autor;
        this.pgs=pgs;
        this.lido=lido;
    }

    marcarLivro(): void {
        this.lido = true;
    }
    infoLivro():String{
        return(`o livro: ${this.titulo}"\nautor: ${this.autor}\npáginas: ${this.pgs}\nestá lido?: ${this.lido ? 'sim' : 'nao'}`)
    }
}

const livro1 = new Livro("livro1", "guilherme",100,true)
const livro2 = new Livro("livro2 - rodricky é o cara", "guilherme S",100,false)
console.log(livro1.infoLivro());
console.log(livro2.infoLivro())
livro1.marcarLivro();
livro2.marcarLivro();