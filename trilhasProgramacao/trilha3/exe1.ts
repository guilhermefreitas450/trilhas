class Veiculo {
    mover(): void {
        console.log("o veículo está se movendo");
    }
}

class Carro extends Veiculo {
    mover(): void {
        console.log("o carro está dirigindo");
    }
}
class Bicicleta extends Veiculo {
    mover(): void {
        console.log("a bicicleta está pedalando");
    }
}
const carro1 = new Carro();
const bicicleta1 = new Bicicleta();

carro1.mover(); 
bicicleta1.mover();