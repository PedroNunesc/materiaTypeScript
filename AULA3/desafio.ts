let leitor = require("readline-sync")
class Aluno {
    nome: string
    notas: Array<number>

constructor(nome: string) {
    this.nome = nome
    this.notas = []
}
addNotas(): void{
    let nota1 = leitor.questionInt("Primeira nota")
    let nota2 = leitor.questionInt("Segunda nota")
    let nota3 = leitor.questionInt("Terceira nota")
    this.notas.push(nota1,nota2,nota3)

}

calcularMedia(){
    let media = (this.notas[0] + this.notas[1] + this.notas[2]) / 3
    return `A média das notas do ${this.nome} é ${media.toFixed(2)}`
}
}
let nomeAluno = leitor.question("Qual o nome do aluno?")
let alunoNovo =  new Aluno(nomeAluno)
alunoNovo.addNotas()
console.log(alunoNovo.calcularMedia())

