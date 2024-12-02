abstract class Animal {
    protected energia: number;

    constructor(energiaPrimaria: number) {
        this.energia = energiaPrimaria;
    }
    statusEnergia(): void {
        console.log(`energia: ${this.energia}`);
    }
    comer(): void {
        this.energia += 10;
        console.log(`animal comento, energia aumentada! ${this.energia}`);
    }
    abstract agir(): void;
}

class Leao extends Animal {
    constructor(energiaPrimaria: number) {
        super(energiaPrimaria);
    }

    agir(): void {
        console.log("leão caçando");
        this.comer();
    }
}

class Passaro extends Animal {
    constructor(energiaInicial: number) {
        super(energiaInicial);
    }
    agir(): void {
        console.log("passaro está comendo");
        this.comer();
    }
}

const leao1 = new Leao(10);
leao1.statusEnergia();
leao1.agir();
leao1.statusEnergia();

const passaro1 = new Passaro(10);
passaro1.statusEnergia();
passaro1.agir(); 
passaro1.statusEnergia();