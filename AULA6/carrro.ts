class Carro {
    private consumoCombustivel: number; 
    private quantidadeCombustivel: number; 

    constructor(consumoCombustivel: number) {
        this.consumoCombustivel = consumoCombustivel;
        this.quantidadeCombustivel = 0; 
    }

    adicionarCombustivel(quantidade: number): void {
        this.quantidadeCombustivel += quantidade;
    }

    andar(distancia: number): void {
        const combustivelNecessario = distancia / this.consumoCombustivel;
        if (combustivelNecessario <= this.quantidadeCombustivel) {
            this.quantidadeCombustivel -= combustivelNecessario;
            console.log(`Carro andou ${distancia} km.`);
        } else {
            console.log("Não há combustível suficiente para percorrer essa distância.");
        }
    }

    obterCombustivel(): number {
        return this.quantidadeCombustivel;
    }
}

let meuCarro = new Carro(10); 

meuCarro.adicionarCombustivel(50); 

console.log(`Combustível disponível: ${meuCarro.obterCombustivel()} litros`);

meuCarro.andar(150); 
console.log(`Combustível restante: ${meuCarro.obterCombustivel()} litros`);

meuCarro.andar(300);
console.log(`Combustível restante: ${meuCarro.obterCombustivel()} litros`);

meuCarro.andar(60); 
console.log(`Combustível restante: ${meuCarro.obterCombustivel()} litros`);
