class ContaBancaria{
    protected titular: string;
    protected saldo: number;

    constructor(titular:string, saldo:number){
        this.titular = titular
        this.saldo   = saldo
     }

     infoConta(): String{
        return`Conta de titular: ${this.titular}, tem saldo de: R${this.saldo}`
}

    depositar(valor: number): void{
        if (valor >0) {
            this.saldo += valor;
            console.log(`depósito no valor de R$${valor} realizado!`)

        }else{
            console.log(`valor inválido tente novamente!@`)
            
        }

}

    sacar(valor:number): void{
        if(valor > 0 && valor <= this.saldo){
            this.saldo-=valor;
            console.log(`saque no valor de R$${valor} realizado com sucesso!`)

        }else{
            console.log(`não foi possível sacar! verifique o saldo e tente novamente!`)
        }
    }
}

const conta1 = new ContaBancaria("Eloana Pontes", 1000);
//conta1.depositar(100);
//console.log(conta1.infoConta());

//conta1.sacar(0);
conta1.sacar(500);
console.log(conta1.infoConta());





    



  