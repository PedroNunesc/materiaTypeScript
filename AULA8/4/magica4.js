"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prova = exports.Gabarito = void 0;
var Gabarito = /** @class */ (function () {
    function Gabarito() {
        this.pesos = [];
        this.respostasCorretas = [];
    }
    Gabarito.prototype.getGabarito = function () {
        return "".concat(this.respostasCorretas);
    };
    Gabarito.prototype.addResposta = function (respostaCorreta, valor) {
        this.pesos.push(valor);
        this.respostasCorretas.push(respostaCorreta);
    };
    return Gabarito;
}());
exports.Gabarito = Gabarito;
var Prova = /** @class */ (function () {
    function Prova(gabarito) {
        this.respostasAluno = [];
        this.gabarito = gabarito;
    }
    Prova.prototype.getRespostasAluno = function () {
        return "".concat(this.respostasAluno);
    };
    Prova.prototype.respostaAluno = function (resposta) {
        this.respostasAluno.push(resposta);
    };
    Prova.prototype.nota = function () {
        var nota = 0;
        for (var i = 0; i < this.gabarito.respostasCorretas.length; i++) {
            if (this.respostasAluno[i] === this.gabarito.respostasCorretas[i]) {
                nota += this.gabarito.pesos[i];
            }
        }
        console.log("O aluno conseguiu " + nota + " pontos");
        return nota;
    };
    Prova.prototype.getTamanhoProva = function () {
        return this.gabarito.respostasCorretas.length;
    };
    Prova.prototype.acertos = function () {
        var acertos = 0;
        for (var i = 0; i < this.gabarito.respostasCorretas.length; i++) {
            if (this.respostasAluno[i] === this.gabarito.respostasCorretas[i]) {
                acertos++;
            }
        }
        return acertos;
    };
    Prova.prototype.maior = function (outraProva) {
        if (this.nota() > outraProva.nota()) {
            console.log("A nota dessa prova é maior");
            return this.nota();
        }
        else {
            console.log("A nota dessa prova é menor");
            return this.nota();
        }
    };
    return Prova;
}());
exports.Prova = Prova;
