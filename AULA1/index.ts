var leitor = require('readline-sync')
class Carro{
    motor: number
    rodas: number
    marca: string
    cor: string
    gasolina: string

    constructor(motor: number, rodas: number, marca: string, cor: string, gasolina: string){
        this.motor = motor 
        this.rodas = rodas
        this.marca = marca
        this.cor = cor
        this.gasolina = gasolina
    }

    dirigir(){
        console.log(`Estou dirigindo minha ${this.marca}`);
    }
    foto(){
        console.log(`Tirando foto da minha ${this.marca}`);
    }
    limpando(){
        console.log(`Limpando minha ${this.marca}`);
    }
    velocidade(){
        console.log(`Minha ${this.marca}, pegou 300km`);
    }
}

const newcar = new Carro(1.3,15,'Honda','Preto','60L')
const cartwo = new Carro(2.4,17,"Toyota",'Azul','50L')
const carthree = new Carro(3.6,15,'Mercedes','Vermelho','40L')


const marcaDeCarro = leitor.question("Qual a marca do carro?")
const marca = new Carro(1.8,17,marcaDeCarro,"Branca","50L")
console.log(marca);
