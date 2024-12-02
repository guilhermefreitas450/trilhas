abstract class FiguraGeometrica {
    abstract calcularArea(): number;
}

class Circulo extends FiguraGeometrica {
    constructor(private raio: number) {
        super();
    }

    calcularArea(): number {
        return Math.PI * this.raio ** 2;
    }
}

class Quadrado extends FiguraGeometrica {
    constructor(private lado: number) {
        super();
    }

    calcularArea(): number {
        return this.lado ** 2;
    }
}

class Triangulo extends FiguraGeometrica {
    constructor(private base: number, private altura: number) {
        super();
    }

    calcularArea(): number {
        return (this.base * this.altura) / 2;
    }
}

const circulo1 = new Circulo(8);
const quadrado1 = new Quadrado(9);
const triangulo1 = new Triangulo(6, 8);

console.log(`area circulo: ${circulo1.calcularArea()}`);
console.log(`area quadrado: ${quadrado1.calcularArea()}`);
console.log(`area triangulo: ${triangulo1.calcularArea()}`);