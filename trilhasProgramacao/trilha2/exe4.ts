class Temperatura {
    protected valorCelsius: number;

    constructor(valorCelsius: number) {
        this.valorCelsius = valorCelsius;
    }
    infoTemp(): string {
        return `temperatura celsius: ${this.valorCelsius}°`;
    }

    fahrenheit(): number {
        return (this.valorCelsius * 9/5)+32;//formula de celsius p fahrenheit
    }

    kelvin(): number {
        return this.valorCelsius+273.15;//formula de celsius p kelvin
    }
    
}

const temperatura1 = new Temperatura(36);
console.log(temperatura1.infoTemp());
//
console.log(`de celsius para fahrenheit: ${temperatura1.fahrenheit()}°F`);
console.log(`de celsius para kelvin: ${temperatura1.kelvin()}°K`);