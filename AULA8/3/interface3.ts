interface Voo {
    constructor(numeroVoo: string, data: Data);
    proximoLivre(): number;
    verifica(cadeira: number): boolean;
    ocupa(cadeira: number): boolean;
    vagas(): number;
    getVoo(): string;
    getData(): Data;
    clone(): Voo;
}
