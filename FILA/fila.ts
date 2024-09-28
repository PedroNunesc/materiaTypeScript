export class Fila<T>{
    private elementos: T[] = []

    //adicionar um elemento no fim da fila
    public enfileirar(item: T): void{
        this.elementos.push(item)
    }

    //remover e retornar o primeiro elemento
    public desenfileirar(): T | undefined{
        if (this.estaVazia()){
            console.log("A fila está vazia");
            return undefined
        } else {
            return this.elementos.shift()
        }
    }

    //retornar o primeiro elemento
    public primeiro(): T | undefined{
        if (this.estaVazia()){
            console.log("A fila está vazia");
            return undefined
        } else {
            return this.elementos[0]
        }
    }

    //metodo isEmpty
    public estaVazia(): boolean{
        return this.elementos.length === 0    
    }

    //metodo size
    public tamanho(): number{
        return this.elementos.length
    }
}

const filaDeClientes = new Fila<string>()

filaDeClientes.enfileirar("Cliente 1")
filaDeClientes.enfileirar("Cliente 2")
filaDeClientes.enfileirar("Cliente 3")

console.log(`Próximo: ${filaDeClientes.desenfileirar()}`)
console.log(`Próximo: ${filaDeClientes.desenfileirar()}`)
console.log(`Próximo: ${filaDeClientes.desenfileirar()}`)
console.log(`Próximo: ${filaDeClientes.desenfileirar()}`)

console.log(`A fila está vazia?: ${filaDeClientes.estaVazia()}`)
