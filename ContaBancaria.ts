
export class ContaBacaria {

    protected saldo: number
    public numero: number
    public agencia: number
    protected senha: number
    public cliente: string

    constructor(saldo: number, numero: number, agencia: number, senha: number, cliente: string) {

        this.saldo = saldo;
        this.numero = numero;
        this.agencia = agencia;
        this.senha = senha;
        this.cliente = cliente;
    }

    consultarSaldo(senha: number): string {

        if (senha !== this.senha) {
            return 'senha inválida'
        }

        const valor: number = this.saldo / 100;

        return `Saldo: RS ${valor.toFixed(2).replace('.', ',')}`;
    }

}

const marcio = new ContaBacaria(956790, 14578, 225, 1078, 'Márcio');

console.log(marcio.consultarSaldo(1078));
