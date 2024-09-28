var leitor = require('readline-sync');
var Carro = /** @class */ (function () {
    function Carro(motor, rodas, marca, cor, gasolina) {
        this.motor = motor
        this.rodas = rodas
        this.marca = marca
        this.cor = cor
        this.gasolina = gasolina
    }
    Carro.prototype.dirigir = function () {
        console.log("Estou dirigindo minha ".concat(this.marca));
    };
    Carro.prototype.foto = function () {
        console.log("Tirando foto da minha ".concat(this.marca));
    };
    Carro.prototype.limpando = function () {
        console.log("Limpando minha ".concat(this.marca));
    };
    Carro.prototype.velocidade = function () {
        console.log("Minha ".concat(this.marca, ", pegou 300km"));
    };
    return Carro;
}());
var newcar = new Carro(1.3,15,'Honda','Preto','60L');
var cartwo = new Carro(2.4,17,"Toyota",'Azul','50L');
var carthree = new Carro(3.6,15,'Mercedes','Vermelho','40L');
var marcaDeCarro = leitor.question("Qual a marca do carro?");
var marca = new Carro(1.8, 17, marcaDeCarro, "Branca", "50L");
console.log(marca);
