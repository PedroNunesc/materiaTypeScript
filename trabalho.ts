export let rl = require("readline-sync");

export class TAREFA {
    constructor(public Descricao: string, public Prioridade: string, public Status: string) {}
}

export class FilaDeTarefas {
    private ListaDeTarefas: TAREFA[] = [];

    public add_tarefa(tarefa: TAREFA): void {
        this.ListaDeTarefas.unshift(tarefa); 
        console.log(`Tarefa adicionada: ${tarefa.Descricao}`);
    }

    public remover_tarefa(): TAREFA | undefined {
        if (this.estaVazia()) {
            console.log("Não tam tarefas!!!"); 
            return undefined; 
        } else {
            return this.ListaDeTarefas.shift();
        }
    }

    public estaVazia(): boolean {
        return this.ListaDeTarefas.length === 0; 
    }

    public listar_tarefas(): void {
        if (this.estaVazia()) {
            console.log("Nenhuma tarefa na fila"); 
            return; 
        }

        console.log("Tarefas na fila:");
        this.ListaDeTarefas.forEach(tarefa => {
            console.log(`Descrição: ${tarefa.Descricao}, Prioridade: ${tarefa.Prioridade}, Status: ${tarefa.Status}`);
        });
    }

    public tarefa_pronta(): void {
        if (this.estaVazia()) {
            console.log("Não tem tarefas para marcar como concluídas!"); 
            return; 
        }
        
        const tarefa = this.ListaDeTarefas[0]; 
        tarefa.Status = "Concluída"; 
        console.log(`Tarefa concluída: ${tarefa.Descricao}`); 
    }

    public tamanhoFila(): number {
        return this.ListaDeTarefas.length; 
    }

    public exibirMenu(): void {
        console.log(`\ 
        -----------------------------------
        ------------ TAREFAS -------------
        -----------------------------------
        - 1. Adicionar Tarefa              
        - 2. Remover Tarefa      
        - 3. Listar Tarefas                       
        - 4. Ver tamanho da fila
        - 5. Tarefa Pronta 
        - 6. Sair                     
        -----------------------------------`);
    }
}

function main() {
    const fila = new FilaDeTarefas();
    let continuar = true;

    while (continuar) {
        fila.exibirMenu();
        const opcao = rl.questionInt("Escolha uma opção: "); 
        
        switch (opcao) {
            case 1:
                console.clear()
                const add_descricao = rl.question("Descricao: "); 
                const add_prioridade = rl.question("Prioridade: ");
                const add_status = rl.question("Status: "); 
                fila.add_tarefa(new TAREFA(add_descricao, add_prioridade, add_status));
                break;
            case 2: 
            console.clear()
                const tarefaRemovida = fila.remover_tarefa();
                if (tarefaRemovida) {
                    console.log(`Tarefa removida: ${tarefaRemovida.Descricao}`); 
                }
                break;
            case 3: 
            console.clear()
                fila.listar_tarefas(); 
                break;
            case 4: 
            console.clear()
                console.log(`Tamanho da fila: ${fila.tamanhoFila()}`); 
                break;
            case 5: 
            console.clear()
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


