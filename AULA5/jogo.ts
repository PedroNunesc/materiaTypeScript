let leitor = require("readline-sync");

interface Ijogo{
    getDetalhees();
    setDetalhes();
}
class Jogo implements Ijogo{ 
    titulo: string;
    genero: string;
    classificacaoEtaria: number

    constructor(titulo: string, genero: string, classificacaoEtaria: number){
        this.titulo = titulo;
        this.genero = genero;
        this.classificacaoEtaria = classificacaoEtaria;
    }
    getDetalhees(): void {
        try {
            console.log(`
            Titulo: ${this.titulo}
            Genero: ${this.genero}
            ClassificacaoEtaria: ${this.classificacaoEtaria}`);
            
        } catch (error) {
            console.log("Nao fopi possivel obter os detalhes")   
        }
    }
    setDetalhes(): void {
        try {
            let tituloUp = leitor.question("Insira o Titulo: ")
            let generoUp = leitor.question("Insira o Gênero: ")
            let classificacaoEtariaUp = leitor.question("Insira a Classificacao Etaria: ")
            this.titulo = tituloUp;
            this.genero = generoUp;
            this.classificacaoEtaria = classificacaoEtariaUp;
            
        } catch (error) {
            console.log("Nao foi possivel obter os detalhes")  
     }
    }
}
interface IjogoEletronico{
    getDetalhees();
    setDetalhes();
}
class JogoEletronico extends Jogo implements IjogoEletronico{
    plataforma: string;
    constructor(titulo: string, genero: string, classificacaoEtaria: number){
            super(titulo,genero,classificacaoEtaria)
        this.plataforma = this.plataforma;
        {
    }
}

    getDetalhees(): void {
        try {
            console.log(`
            Titulo: ${this.titulo}
            Genero: ${this.genero}
            ClassificacaoEtaria: ${this.classificacaoEtaria}
            Plataforma: ${this.plataforma}`);
        } catch (error) {    
        }
    }
    setDetalhes(): void {
        try {
            let tituloUp = leitor.question("Insira o Titulo: ")
            let generoUp = leitor.question("Insira o Gênero: ")
            let classificacaoEtariaUp = leitor.question("Insira a Classificacao Etaria: ")
            let plataforma = leitor.question("Insira a Plataforma: ")
            this.titulo = tituloUp;
            this.genero = generoUp;
            this.classificacaoEtaria = classificacaoEtariaUp;
            this.plataforma = plataforma;    
        } catch (error) {
            console.log("Nao foi possivel obter os detalhes")
      }      
  }
}
interface IjogoDeTabuleiro{
    getDetalhees();
    setDetalhes();
}

class JogoDeTabuleiro extends Jogo implements IjogoDeTabuleiro{
    jogo: Jogo;
    jogoEletronico: JogoEletronico;
    numeroDeJogadores: number;

    super(titulo: string, genero: string, classificacaoEtaria: number, numeroDeJogadores: number){
        this.titulo = titulo;
        this.genero = genero;
        this.classificacaoEtaria = classificacaoEtaria;
        this.numeroDeJogadores = numeroDeJogadores;
    }

    getDetalhes(): void {
        try {
            console.log(`
            Titulo: ${this.titulo}
            Genero: ${this.genero}
            ClassificacaoEtaria: ${this.classificacaoEtaria}
            Número de Jogadores: ${this.numeroDeJogadores}`);   
        } catch (error) {   
            console.log("Nao foi possivel obter os detalhes")
        }
    }
    setDetalhes(): void {
        try {
            let tituloUp = leitor.question("Insira o Titulo: ")
            let generoUp = leitor.question("Insira o Gênero: ")
            let classificacaoEtariaUp = leitor.question("Insira a Classificacao Etaria: ")
            let numeroDeJogadoresUp = leitor.questionInt("Insira o Numero de Jogadores: ")
            this.titulo = tituloUp;
            this.genero = generoUp;
            this.classificacaoEtaria = classificacaoEtariaUp;
            this.numeroDeJogadores = numeroDeJogadoresUp;  
        } catch (error) {
            console.log("Nao foi possivel obter os detalhes")   
        }
    }
}
interface IBibliotecaDeJogos{
    adicionarJogo(jogo);
    removerJogo(titulo);
    listarJogos(Jogo);
}

class BibliotecaDeJogos implements IBibliotecaDeJogos {
    private jogos: Jogo[];

    constructor() {
        this.jogos = [];
    }

    adicionarJogo(jogo: Jogo): void {
        try {
            this.jogos.push(jogo);
            console.log(`Jogo "${jogo.titulo}" foi adicionado à biblioteca.`);  
        } catch (error) {
            console.log("Nao foi possivel adicionar um jogo")    
        }
    }
    public removerJogo(): void {
        try {
            console.log(this.jogos);
            let tituloExcluir = leitor.question('Qual titulo deseja excluir: ')
            this.jogos = this.jogos.filter(objetoJogo => objetoJogo.titulo !== tituloExcluir) 
        } catch (error) {
            console.log("Nao foi possivel remover um jogo")
        }
    }
    listarJogos(): void {
        try {
            console.log("Jogos na Biblioteca:");
            this.jogos.forEach(jogo => {
                console.log(`
                Título: ${jogo.titulo}
                Gênero: ${jogo.genero}
                Classificação Etária: ${jogo.classificacaoEtaria}`);
            }); 
        } catch (error) {
            console.log("Nao foi possivel listar os jogos")  
        }
    }
}
function main() {
    let jogo = new Jogo("GTA 5", "Ação", 18);
    let jogoTabu = new JogoDeTabuleiro("Monopoly", "Tabuleiro", 8,);
    jogoTabu.numeroDeJogadores = 4
    let jogoEletro = new JogoEletronico("FIFA 14", "Esporte", 10);
    jogoEletro.plataforma = "PlayStation 5 "
    let biblioteca = new BibliotecaDeJogos();

    let opcao = '';

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
        
