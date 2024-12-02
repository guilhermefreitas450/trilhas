class EnviadorEmail {
    enviarEmail(contato: string, mensagem: string): void {
        if (this.validarContato(contato)) {
            console.log(`Enviando email para ${contato}: ${mensagem}`);
        } else {
            console.log(`O contato ${contato} não é válido.`);
        }
    }

    validarContato(contato: string): boolean {
        return contato.includes('@') && contato.includes('.');
    }
}

const enviador = new EnviadorEmail();
enviador.enviarEmail("eloana.pontes@gmail.com", "teste!");
enviador.enviarEmail("dsjlksj", "esse e-mail não será enviado.");