var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var leitor = require("readline-sync");
var Jogo = /** @class */ (function () {
    function Jogo(titulo, genero, classificacaoEtaria) {
        this.titulo = titulo;
        this.genero = genero;
        this.classificacaoEtaria = classificacaoEtaria;
    }
    Jogo.prototype.getDetalhees = function () {
        try {
            console.log("\n            Titulo: ".concat(this.titulo, "\n            Genero: ").concat(this.genero, "\n            ClassificacaoEtaria: ").concat(this.classificacaoEtaria));
        }
        catch (error) {
            console.log("Nao fopi possivel obter os detalhes");
        }
    };
    Jogo.prototype.setDetalhes = function () {
        try {
            var tituloUp = leitor.question("Insira o Titulo: ");
            var generoUp = leitor.question("Insira o Gênero: ");
            var classificacaoEtariaUp = leitor.question("Insira a Classificacao Etaria: ");
            this.titulo = tituloUp;
            this.genero = generoUp;
            this.classificacaoEtaria = classificacaoEtariaUp;
        }
        catch (error) {
            console.log("Nao foi possivel obter os detalhes");
        }
    };
    return Jogo;
}());
var JogoEletronico = /** @class */ (function (_super) {
    __extends(JogoEletronico, _super);
    function JogoEletronico(titulo, genero, classificacaoEtaria) {
        var _this = _super.call(this, titulo, genero, classificacaoEtaria) || this;
        _this.plataforma = _this.plataforma;
        {
        }
        return _this;
    }
    JogoEletronico.prototype.getDetalhees = function () {
        try {
            console.log("\n            Titulo: ".concat(this.titulo, "\n            Genero: ").concat(this.genero, "\n            ClassificacaoEtaria: ").concat(this.classificacaoEtaria, "\n            Plataforma: ").concat(this.plataforma));
        }
        catch (error) {
        }
    };
    JogoEletronico.prototype.setDetalhes = function () {
        try {
            var tituloUp = leitor.question("Insira o Titulo: ");
            var generoUp = leitor.question("Insira o Gênero: ");
            var classificacaoEtariaUp = leitor.question("Insira a Classificacao Etaria: ");
            var plataforma = leitor.question("Insira a Plataforma: ");
            this.titulo = tituloUp;
            this.genero = generoUp;
            this.classificacaoEtaria = classificacaoEtariaUp;
            this.plataforma = plataforma;
        }
        catch (error) {
            console.log("Nao foi possivel obter os detalhes");
        }
    };
    return JogoEletronico;
}(Jogo));
var JogoDeTabuleiro = /** @class */ (function (_super) {
    __extends(JogoDeTabuleiro, _super);
    function JogoDeTabuleiro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JogoDeTabuleiro.prototype.super = function (titulo, genero, classificacaoEtaria, numeroDeJogadores) {
        this.titulo = titulo;
        this.genero = genero;
        this.classificacaoEtaria = classificacaoEtaria;
        this.numeroDeJogadores = numeroDeJogadores;
    };
    JogoDeTabuleiro.prototype.getDetalhes = function () {
        try {
            console.log("\n            Titulo: ".concat(this.titulo, "\n            Genero: ").concat(this.genero, "\n            ClassificacaoEtaria: ").concat(this.classificacaoEtaria, "\n            N\u00FAmero de Jogadores: ").concat(this.numeroDeJogadores));
        }
        catch (error) {
            console.log("Nao foi possivel obter os detalhes");
        }
    };
    JogoDeTabuleiro.prototype.setDetalhes = function () {
        try {
            var tituloUp = leitor.question("Insira o Titulo: ");
            var generoUp = leitor.question("Insira o Gênero: ");
            var classificacaoEtariaUp = leitor.question("Insira a Classificacao Etaria: ");
            var numeroDeJogadoresUp = leitor.questionInt("Insira o Numero de Jogadores: ");
            this.titulo = tituloUp;
            this.genero = generoUp;
            this.classificacaoEtaria = classificacaoEtariaUp;
            this.numeroDeJogadores = numeroDeJogadoresUp;
        }
        catch (error) {
            console.log("Nao foi possivel obter os detalhes");
        }
    };
    return JogoDeTabuleiro;
}(Jogo));
var BibliotecaDeJogos = /** @class */ (function () {
    function BibliotecaDeJogos() {
        this.jogos = [];
    }
    BibliotecaDeJogos.prototype.adicionarJogo = function (jogo) {
        try {
            this.jogos.push(jogo);
            console.log("Jogo \"".concat(jogo.titulo, "\" foi adicionado \u00E0 biblioteca."));
        }
        catch (error) {
            console.log("Nao foi possivel adicionar um jogo");
        }
    };
    BibliotecaDeJogos.prototype.removerJogo = function () {
        try {
            console.log(this.jogos);
            var tituloExcluir_1 = leitor.question('Qual titulo deseja excluir: ');
            this.jogos = this.jogos.filter(function (objetoJogo) { return objetoJogo.titulo !== tituloExcluir_1; });
        }
        catch (error) {
            console.log("Nao foi possivel remover um jogo");
        }
    };
    BibliotecaDeJogos.prototype.listarJogos = function () {
        try {
            console.log("Jogos na Biblioteca:");
            this.jogos.forEach(function (jogo) {
                console.log("\n                T\u00EDtulo: ".concat(jogo.titulo, "\n                G\u00EAnero: ").concat(jogo.genero, "\n                Classifica\u00E7\u00E3o Et\u00E1ria: ").concat(jogo.classificacaoEtaria));
            });
        }
        catch (error) {
            console.log("Nao foi possivel listar os jogos");
        }
    };
    return BibliotecaDeJogos;
}());
function main() {
    var jogo = new Jogo("GTA 5", "Ação", 18);
    var jogoTabu = new JogoDeTabuleiro("Monopoly", "Tabuleiro", 8);
    jogoTabu.numeroDeJogadores = 4;
    var jogoEletro = new JogoEletronico("FIFA 14", "Esporte", 10);
    jogoEletro.plataforma = "PlayStation 5 ";
    var biblioteca = new BibliotecaDeJogos();
    var opcao = '';
    while (opcao !== '10') {
        console.log("\n===== SISTEMA DE JOGOS =====");
        console.log("1. Ver Detalhes do Jogo");
        console.log("2. Adicionar Novo Jogo");
        console.log("3. Ver Detalhes do Jogo Eletrônico");
        console.log("4. Adicionar Novo Jogo Eletrônico");
        console.log("5. Ver Detalhes do Jogo de Tabuleiro");
        console.log("6. Adicionar Novo Jogo de Tabuleiro");
        console.log("7. Listar Jogos da Biblioteca");
        console.log("8. Adicionar Jogo à Biblioteca");
        console.log("9. Remover Jogo da Biblioteca");
        console.log("10. SAIR\n");
        opcao = leitor.question("ESCOLHA UMA OPCAO: ");
        switch (opcao) {
            case '1':
                jogo.getDetalhees();
                break;
            case '2':
                jogo.setDetalhes();
                break;
            case '3':
                jogoEletro.getDetalhees();
                break;
            case '4':
                jogoEletro.setDetalhes();
                break;
            case '5':
                jogoTabu.getDetalhes();
                break;
            case '6':
                jogoTabu.setDetalhes();
                break;
            case '7':
                biblioteca.listarJogos();
                break;
            case '8':
                biblioteca.adicionarJogo(jogo);
                break;
            case '9':
                biblioteca.removerJogo();
                break;
            case '10':
                console.log("SAINDO...");
                break;
            default:
                console.log("Opção inválida. Por favor, escolha uma opção válida.");
        }
    }
}
main();
