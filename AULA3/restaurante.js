var Chef = /** @class */ (function () {
    function Chef(nome, idade, ano_exp) {
        this.nome = nome;
        this.idade = idade;
        this.ano_exp = ano_exp;
    }
    return Chef;
}());
var Restaurante = /** @class */ (function () {
    function Restaurante(chef, nome_res, end_res, num_end) {
        this.chef = chef;
        this.nome_res = nome_res;
        this.end_res = end_res;
        this.num_end = num_end;
    }
    Restaurante.prototype.apresentacaoRest = function () {
        console.log("Ol\u00E1, somos o restaurante ".concat(this.nome_res, " e nosso chef \u00E9 ").concat(this.chef.nome));
    };
    return Restaurante;
}());
var cozinheiro = new Chef("Pedro", 50, 39);
var restaurante = new Restaurante(cozinheiro, "Portal", "Rua")
