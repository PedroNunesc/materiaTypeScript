export class Pilha<T>{
    // o tipo T é Type, tipo genérico no código.
    private elementos : T[] = []

    //add um elemento à pilha
    pushPilha(item: T): void{
        this.elementos.push(item)
    }

    //remove e retorna o elemento do topo da pilha
    popPilha(): T | undefined {
        return this.elementos.pop()
    }

    //retorna o elemento do topo da pilha
    peek(): T | undefined {
        return this.elementos[this.elementos.length - 1]
    }

    //retorna um boolean para dizer se está vazio ou não
    isEmpty(): boolean{
        return this.elementos.length === 0
    }

    //verifica o tamanho da pilha
    size(): number{
        return this.elementos.length
    }

    //limpar a pilha
    clear(): void{
        this.elementos = []
    }
}

const minhaPilha = new Pilha<number>()
minhaPilha.pushPilha(1)
minhaPilha.pushPilha(2)
minhaPilha.pushPilha(3)

console.log(minhaPilha.popPilha()) //Saída é o n 3
console.log(minhaPilha.peek()) //Saída é o n 2
console.log(minhaPilha.size()) //Saída é 2
console.log(minhaPilha.isEmpty()) //False

minhaPilha.clear()
console.log(minhaPilha.isEmpty()) //true
