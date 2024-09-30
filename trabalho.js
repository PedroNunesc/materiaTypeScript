"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilaDeTarefas = exports.TAREFA = exports.rl = void 0;
exports.rl = require("readline-sync");
var TAREFA = /** @class */ (function () {
    function TAREFA(Descricao, Prioridade, Status) {
        this.Descricao = Descricao;
        this.Prioridade = Prioridade;
        this.Status = Status;
    }
    return TAREFA;
}());
exports.TAREFA = TAREFA;
var FilaDeTarefas = /** @class */ (function () {
    function FilaDeTarefas() {
        this.ListaDeTarefas = [];
    }
    FilaDeTarefas.prototype.add_tarefa = function (tarefa) {
        this.ListaDeTarefas.unshift(tarefa);
        console.log("Tarefa adicionada: ".concat(tarefa.Descricao));
    };
    FilaDeTarefas.prototype.remover_tarefa = function () {
        if (this.estaVazia()) {
            console.log("Não tam tarefas!!!");
            return undefined;
        }
        else {
            return this.ListaDeTarefas.shift();
        }
    };
    FilaDeTarefas.prototype.estaVazia = function () {
        return this.ListaDeTarefas.length === 0;
    };
    FilaDeTarefas.prototype.listar_tarefas = function () {
        if (this.estaVazia()) {
            console.log("Nenhuma tarefa na fila");
            return;
        }
        console.log("Tarefas na fila:");
        this.ListaDeTarefas.forEach(function (tarefa) {
            console.log("Descri\u00E7\u00E3o: ".concat(tarefa.Descricao, ", Prioridade: ").concat(tarefa.Prioridade, ", Status: ").concat(tarefa.Status));
        });
    };
    FilaDeTarefas.prototype.tarefa_pronta = function () {
        if (this.estaVazia()) {
            console.log("Não tem tarefas para marcar como concluídas!");
            return;
        }
        var tarefa = this.ListaDeTarefas[0];
        tarefa.Status = "Concluída";
        console.log("Tarefa conclu\u00EDda: ".concat(tarefa.Descricao));
    };
    FilaDeTarefas.prototype.tamanhoFila = function () {
        return this.ListaDeTarefas.length;
    };
    FilaDeTarefas.prototype.exibirMenu = function () {
        console.log(" \n        -----------------------------------\n        ------------ TAREFAS -------------\n        -----------------------------------\n        - 1. Adicionar Tarefa              \n        - 2. Remover Tarefa      \n        - 3. Listar Tarefas                       \n        - 4. Ver tamanho da fila\n        - 5. Tarefa Pronta \n        - 6. Sair                     \n        -----------------------------------");
    };
    return FilaDeTarefas;
}());
exports.FilaDeTarefas = FilaDeTarefas;
function main() {
    var fila = new FilaDeTarefas();
    var continuar = true;
    while (continuar) {
        fila.exibirMenu();
        var opcao = exports.rl.questionInt("Escolha uma opção: ");
        switch (opcao) {
            case 1:
                console.clear();
                var add_descricao = exports.rl.question("Descricao: ");
                var add_prioridade = exports.rl.question("Prioridade: ");
                var add_status = exports.rl.question("Status: ");
                fila.add_tarefa(new TAREFA(add_descricao, add_prioridade, add_status));
                break;
            case 2:
                console.clear();
                var tarefaRemovida = fila.remover_tarefa();
                if (tarefaRemovida) {
                    console.log("Tarefa removida: ".concat(tarefaRemovida.Descricao));
                }
                break;
            case 3:
                console.clear();
                fila.listar_tarefas();
                break;
            case 4:
                console.clear();
                console.log("Tamanho da fila: ".concat(fila.tamanhoFila()));
                break;
            case 5:
                console.clear();
                fila.tarefa_pronta();
                break;
            case 6:
                continuar = false;
                console.log("Saindo");
                break;
            default:
                console.log("Opcao invalida! Tente novamente.");
                break;
        }
    }
}
main();
