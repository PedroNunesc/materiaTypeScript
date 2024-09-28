class pessoa {
    nome: string
    idade: number
    constructor(nome: string, idade: number){
        this.nome = nome
        this.idade = idade
    }
    cumprimentar(): void{
        console.log(`Ola, meu nome é ${this.nome} e tenho ${this.idade} anos.`)
        
    }
}

let novapessoa = new pessoa("luiz",28)
        novapessoa.cumprimentar()

        class crinca extends pessoa{
            cumprimentar(): void {
                console.log(`Ola, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
            }
        }
        class idoso extends pessoa{
            cumprimentar(): void {
                console.log(`Ola, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
            }
        }
        class adulto extends pessoa{
            cumprimentar(): void {
                console.log(`Ola, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
            }
        }

        let pessoaNew = new pessoa('Pedro',15)
        let crincaNew = new crinca("Lucas",54)
        let idosoNew = new idoso('Jairo',71)
        let adultoNew = new adulto('Marcos',35)

        pessoaNew.cumprimentar()
        crincaNew.cumprimentar()
        idosoNew.cumprimentar()
        adultoNew.cumprimentar()
