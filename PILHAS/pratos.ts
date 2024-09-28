export class PilhaDePratos{
    private pratos: string[] = []

    //add e retorna num log o prato no topo
    addPrato(prato: string): void{
        this.pratos.push(prato)
        console.log(`${prato} foi colocado no topo da pilha!`);
    }

    // remove e retorna o prato do topo
    retirarPrato(): string | undefined{
        const prato = this.pratos.pop()
        if (prato) {
            console.log(`${prato} foi removido do topo da pilha`)
        } else {
            console.log(`A pilha está vazia.`)
        }
        return prato
    }

    //verificar se está vazio
    isEmpty(): boolean{
        return this.pratos.length === 0
    }

    //verifica a quantidade de elementos
    size(): number{
        return this.pratos.length
    }
}

const pilhaDePratos = new PilhaDePratos()

pilhaDePratos.addPrato('Prato 1')
pilhaDePratos.addPrato('Prato 2')
pilhaDePratos.addPrato('Prato 3')

pilhaDePratos.retirarPrato()
pilhaDePratos.retirarPrato()

console.log(`A pilha de pratos está vazia? ${pilhaDePratos.isEmpty()}`);

console.log(`Tamanho da pilha: ${pilhaDePratos.size()}`);
