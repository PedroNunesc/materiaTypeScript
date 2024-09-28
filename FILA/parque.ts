export class FilaDeParque{
    private pessoas: string[] = []

    public entrarNaFila(nome: string): void{
        this.pessoas.unshift(nome)
        //insere no início do vetor, ao invés do final
    }

    public atender(): string | undefined{
        if(this.estaVazia()){
            console.log("A fila está vazia!")
            return undefined
        }
        return this.pessoas.pop()
        //retira do fim do vetor
    }

    public proximaNaFila(): string | undefined{
        if(this.estaVazia()){
            console.log("A fila está vazia!")
            return undefined
        }
        return this.pessoas[this.pessoas.length - 1]
    }

    public estaVazia(): boolean{
        return this.pessoas.length === 0
    }

    public tamanho(): number{
        return this.pessoas.length
    }
}
