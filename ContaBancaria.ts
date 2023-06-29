import { Cliente } from "./Cliente"

export type TContaBancaria = {
    saldo: number
    numero: number
    agencia: number
    senha: number
    cliente: Cliente
}

export abstract class ContaBacaria {

    protected saldo: number
    public numero: number
    public agencia: number
    protected senha: number
    public cliente: Cliente

    constructor(dadosConta: TContaBancaria) {

        this.saldo = dadosConta.saldo;
        this.numero = dadosConta.numero;
        this.agencia = dadosConta.agencia;
        this.senha = dadosConta.senha;
        this.cliente = dadosConta.cliente

        //   Object.assign(this, dadosConta);
    }

    consultarSaldo(senha: number): string {

        if (senha !== this.senha) {
            return 'senha inválida'
        }

        const valor: number = this.saldo / 100;

        return `Saldo: R$ ${valor.toFixed(2).replace('.', ',')}`;
    }

    abstract depositar(valor: number): string;

    abstract sacar(senha: number, valor: number): string;

}