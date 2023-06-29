import { ContaBacaria, TContaBancaria } from "./ContaBancaria";

export class ContaCorrente extends ContaBacaria {

    private limite: number;

    constructor(dadosConta: TContaBancaria) {
        super(dadosConta);

        this.limite = 100000
    }

    depositar(valor: number): string {
        this.saldo += valor
        const saldo: number = this.saldo / 100;

        return `Saldo: R$ ${saldo.toFixed(2).replace('.', ',')}`;
    }

    sacar(senha: number, valor: number): string {

        if (senha !== this.senha) {
            return 'senha inválida';
        }

        if (valor > this.saldo + this.limite) {
            return 'Valor indisponível para saque'
        }

        this.saldo -= valor
        const saldo: number = this.saldo / 100;

        return `Saldo: R$ ${saldo.toFixed(2).replace('.', ',')}`;
    }
}