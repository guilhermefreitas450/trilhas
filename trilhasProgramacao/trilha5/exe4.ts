
abstract class SistemaVotacao {
    protected votos: Record<string, number> = {};
    abstract votarEm(candidato: string): void;
    abstract obterResultados(): object;
}

class Eleicao extends SistemaVotacao {
    votarEm(candidato: string): void {
        if (this.votos[candidato]) {
            this.votos[candidato]++;
        } else {
            this.votos[candidato] = 1;
        }
    }

    obterResultados(): object {
        return this.votos;
    }
}

class Pesquisa extends SistemaVotacao {
    votarEm(candidato: string): void {
        if (this.votos[candidato]) {
            this.votos[candidato]++;
        } else {
            this.votos[candidato] = 1;
        }
    }

    obterResultados(): object {
        const candidatosOrdenados = Object.entries(this.votos)
            .sort((a, b) => b[1] - a[1])
            .map(([candidato]) => candidato);
        return candidatosOrdenados;
    }
}

const eleicao = new Eleicao();
eleicao.votarEm("lula");
eleicao.votarEm("stalin");
eleicao.votarEm("mao tse tung");

console.log("Resultado da Eleição:", eleicao.obterResultados());

const pesquisa = new Pesquisa();
pesquisa.votarEm("lula");
pesquisa.votarEm("lula");
pesquisa.votarEm("lula");
pesquisa.votarEm("mao tse tung");
pesquisa.votarEm("mao tse tung");

console.log("Resultado da Pesquisa:", pesquisa.obterResultados());
