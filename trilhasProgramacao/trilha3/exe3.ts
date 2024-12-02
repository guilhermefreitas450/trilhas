abstract class Pagamento {
    abstract processar(): void;
}

class Cartao extends Pagamento {
    constructor(private numeroCartao: string) {
        super();
    }

    processar(): void {
        if (this.validarCartao(this.numeroCartao)) {
            console.log(`pagamento realizado com cartão: ${this.numeroCartao}`);
        } else {
            console.log(`cartão inválido: ${this.numeroCartao}`);
        }
    }
    private validarCartao(numeroCartao: string): boolean {
        return numeroCartao.length === 16;
    }
}
class Boleto extends Pagamento {
    constructor(private valor: number) {
        super();
    }
    processar(): void {
        const codigo = this.gerarboleto();
        console.log(`boleto gerado - valor R$${this.valor}: cod: ${codigo}`);
    }

    private gerarboleto(): string {
        return Math.random().toString(36).substring(2, 12).toUpperCase();
    }
}

function pagamento(pagamento: Pagamento): void {
    pagamento.processar();
}

const cartao1 = new Cartao("1234567890123456");
const boleto1 = new Boleto(1000);
const cartao2 = new Cartao("12345");
pagamento(cartao1);
pagamento(boleto1);
pagamento(cartao2);