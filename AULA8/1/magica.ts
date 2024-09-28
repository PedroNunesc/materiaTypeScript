import { Ialuno } from "./interface";

class Alunos implements Aluno{
    matricula: number;
    nome: string;
    notaProva1: number;
    notaProva2: number;
    notaTrabalho: number;

    constructor(matricula: number, nome: string, notaProva1: number, notaProva2: number, notaTrabalho: number) {
        this.matricula = matricula;
        this.nome = nome;
        this.notaProva1 = notaProva1;
        this.notaProva2 = notaProva2;
        this.notaTrabalho = notaTrabalho;
    }
    ["constructor"](matricula: number, nome: string, notaProva1: number, notaProva2: number, notaTrabalho: number) {
        throw new Error("Method not implemented.");
    }

    media(): number {
        return (this.notaProva1 + this.notaProva2 ) / 2;
    }

    final(): number {
        const final = (this.media() + this.notaTrabalho / 2) 
        return final;
        ;
    }
}

const aluno1= new Aluno(1010, 'Pedro Nunes', 5.5, 6.0, 8.0);

console.log(`Matrícula: ${aluno1.matricula}`); 
console.log(`Nome: ${aluno1.nome}`); 
console.log(`Média: ${aluno1.media().toFixed(2)}`); 
console.log(`Nota Final: ${aluno1.final().toFixed(2)}`); 


class Aluno implements Ialuno{
    matricula: number;
    nome: string;
    notaProva1: number;
    notaProva2: number;
    notaTrabalho: number;

    constructor(matricula: number, nome: string, notaProva1: number, notaProva2: number, notaTrabalho: number) {
        this.matricula = matricula;
        this.nome = nome;
        this.notaProva1 = notaProva1;
        this.notaProva2 = notaProva2;
        this.notaTrabalho = notaTrabalho;
    }
    ["constructor"](matricula: number, nome: string, notaProva1: number, notaProva2: number, notaTrabalho: number) {
        throw new Error("Method not implemented.");
    }

    media(): number {
        return (this.notaProva1 + this.notaProva2 ) / 2;
    }

    final(): number {
        const final = (this.media() + this.notaTrabalho / 2) 
        return final;
        ;
    }
}

const aluno1 = new Aluno(1010, 'Lucas Florão', 7.5, 2.0, 9.0);

console.log(`Matrícula: ${aluno1.matricula}`);
console.log(`Nome: ${aluno1.nome}`); 
console.log(`Média: ${aluno1.media().toFixed(2)}`); 
console.log(`Nota Final: ${aluno1.final().toFixed(2)}`); 
