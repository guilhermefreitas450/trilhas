

interface ProdutoLoja {
    codigo: number;
    nome: string;
}

class Loja {
    private produtos: ProdutoLoja[] = [];
    addProduto(produto: ProdutoLoja): void {
        this.produtos.push(produto);
    }

    produtoCodigo(codigo: number): ProdutoLoja | undefined {
        return this.produtos.find(produto => produto.codigo === codigo);
    }
}

const loja = new Loja();
loja.addProduto({ codigo: 10, nome: "ps5" });
loja.addProduto({ codigo: 11, nome: "ps2" });

console.log(loja.produtoCodigo(10));
console.log(loja.produtoCodigo(11));
