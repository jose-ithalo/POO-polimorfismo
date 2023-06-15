import format from 'date-fns/format';

type TEndereco = {
    cep: string,
    rua: string,
    bairro: string,
    cidade: string
}

type TCliente = {
    nome: string,
    email: string,
    cpf: string
}

export class Cliente {

    nome: string
    email: string
    cpf: string
    dataCadastro: string
    enderecos: TEndereco[]

    constructor(cliente: TCliente) {
        this.nome = cliente.nome;
        this.email = cliente.email;
        this.cpf = cliente.cpf;
        this.dataCadastro = format(new Date(), "dd/MM/yyyy");
        this.enderecos = [];
    }

    adicionarEndereco(endereco: TEndereco): void {

        this.enderecos.push(endereco);
    }

}
