class GerenciadorUsuarios {
    private usuarios: string[] = [];

    criarUsuario(nome: string): void {
        this.usuarios.push(nome);
        console.log(`Usuário ${nome} criado com sucesso.`);
        this.enviarNotificacao(nome);
    }

    enviarNotificacao(nome: string): void {
        console.log(`Enviando notificação para o email de ${nome}`);
    }

    listarUsuarios(): string[] {
        return this.usuarios;
    }
}

const gerenciador1 = new GerenciadorUsuarios();
gerenciador1.criarUsuario("eloana");
gerenciador1.criarUsuario("kim minjeong");
console.log(gerenciador1.listarUsuarios());