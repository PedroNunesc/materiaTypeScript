var leitor = require("readline-sync");
var Aluno = /** @class */ (function () {
    function Aluno(nome) {
        this.nome = nome;
        this.notas = [];
    }
    Aluno.prototype.addNotas = function () {
        var nota1 = leitor.questionInt("Primeira nota");
        var nota2 = leitor.questionInt("Segunda nota");
        var nota3 = leitor.questionInt("Terceira nota");
        this.notas.push(nota1, nota2, nota3);
    };
    Aluno.prototype.calcularMedia = function () {
        var media = (this.notas[0] + this.notas[1] + this.notas[2]) / 3;
        return "A m\u00E9dia das notas do ".concat(this.nome, " \u00E9 ").concat(media.toFixed(2));
    };
    return Aluno;
}());
var nomeAluno = leitor.question("Qual o nome do aluno?");
var alunoNovo = new Aluno(nomeAluno);
alunoNovo.addNotas();
console.log(alunoNovo.calcularMedia());
