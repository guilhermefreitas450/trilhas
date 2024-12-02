class Agenda {
    protected compromissos: string[];

    constructor() {
        this.compromissos = [];
    }
    listar(): void {
        console.log("compromissos:");
         this.compromissos.forEach(compromisso => {
            console.log(compromisso); 
        });
    }

    add(compromisso: string): void {
        this.compromissos.push(compromisso);
    }
    
}

const agenda1 = new Agenda();
agenda1.add("tomar café");
agenda1.add("ver a loja do valorant");
agenda1.add("jogar 3 TDM antes da ranked")
agenda1.listar();