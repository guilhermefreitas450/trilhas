abstract class Funcionario {
    protected nome: string;
    protected salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    abstract calcbonus(): number;
    calcSalarioBonus(): number {
        return this.salario + this.calcbonus();
    }

    salarioBonus(): void {
        console.log(`${this.nome}: o salário com bônus é de R$${this.calcSalarioBonus()}`);
    }
}

class Gerente extends Funcionario {
    constructor(nome: string, salario: number) {
        super(nome, salario);
    }

    calcbonus(): number {
        return this.salario * 0.10; 
    }
}


class Operario extends Funcionario {
    constructor(nome: string, salario: number) {
        super(nome, salario);
    }
    calcbonus(): number {
        return this.salario * 0.05; 
    }
}

function calSalariosBonus(funcionarios: Funcionario[]): void {
    funcionarios.forEach(funcionario => {
        funcionario.salarioBonus();
    });
}

const gerente1 = new Gerente("eloana", 5000);
const operario1 = new Operario("minjeong", 1000);
calSalariosBonus([gerente1, operario1]);