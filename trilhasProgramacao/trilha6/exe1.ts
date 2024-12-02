class Pedido {
    private itens: string[] = [];
    private precoTotal: number = 0;
    private statusPagamento: string = 'Pendente';
    private statusEnvio: string = 'Não Enviado';

    adicionarItem(item: string, preco: number): void {
        this.itens.push(item);
        this.precoTotal += preco;
    }

    processarPagamento(): void {
        if (this.precoTotal > 0) {
            this.statusPagamento = 'Pago';
            console.log("Pagamento processado com sucesso!");
        } else {
            console.log("Nenhum item no pedido.");
        }
    }

    atualizarStatusEnvio(status: string): void {
        this.statusEnvio = status;
        console.log(`Status de envio atualizado para: ${status}`);
    }

    resumoPedido(): string {
        return `Itens: ${this.itens.join(", ")}, Preço Total: R$ ${this.precoTotal}, Status do Pagamento: ${this.statusPagamento}, Status de Envio: ${this.statusEnvio}`;
    }
}

const pedido = new Pedido();
pedido.adicionarItem("ps5", 10);
pedido.adicionarItem("livro da kefera", 30);
pedido.processarPagamento();
pedido.atualizarStatusEnvio("Enviado");

console.log(pedido.resumoPedido());