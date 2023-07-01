import { ContaBacaria, TContaBancaria } from "./ContaBancaria";

export class ContaPoupanca extends ContaBacaria {

    private taxaRendimento: number;

    constructor(dadosConta: TContaBancaria) {
        super(dadosConta);

        this.taxaRendimento = 0.05;
    }

    depositar(valor: number): string {
        this.saldo += valor + (valor * this.taxaRendimento);

        const saldo: number = this.saldo / 100;

        return `Saldo: R$ ${saldo.toFixed(2).replace('.', ',')}`;
    }

    sacar(senha: number, valor: number): string {

        if (senha !== this.senha) {
            return 'senha inválida';
        }

        if (valor > this.saldo) {
            return 'Valor indisponível para saque'
        }

        this.saldo -= valor
        const saldo: number = this.saldo / 100;

        return `Saldo: R$ ${saldo.toFixed(2).replace('.', ',')}`;
    }
}