"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
var Data = /** @class */ (function () {
    function Data(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    Data.prototype.compara = function (outraData) {
        if ((this.dia === outraData.dia) && (this.mes === outraData.mes) && (this.ano === outraData.ano)) {
            console.log("As datas são iguais");
            return 1;
        }
        return -1;
    };
    Data.prototype.getDia = function () {
        return this.dia;
    };
    Data.prototype.getMes = function () {
        return this.mes;
    };
    Data.prototype.getAno = function () {
        return this.ano;
    };
    Data.prototype.getMesExtenso = function () {
        var mes = ['janeiro', 'fevereito', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
        return mes[this.mes - 1];
    };
    Data.prototype.getDataExtenso = function () {
        return "".concat(this.dia, " de ").concat(this.getMesExtenso(), " de ").concat(this.ano);
    };
    Data.prototype.isBissexto = function () {
        if (this.ano % 4 !== 0) {
            return false;
        }
        else if (this.ano % 100 === 0 && this.ano % 400 !== 0) {
            return false;
        }
        else {
            return true;
        }
    };
    Data.prototype.clone = function () {
        return new Data(this.dia, this.mes, this.ano);
    };
    return Data;
}());
exports.Data = Data;
