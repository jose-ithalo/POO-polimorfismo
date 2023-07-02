import { Cliente } from "./Cliente";
import { ContaCorrente } from "./ContaCorrente";
import { ContaPoupanca } from "./ContaPoupanca";

const marcio = new Cliente({
    nome: 'Márcio',
    email: 'marcio@email.com',
    cpf: '788-147-422-22'
});

marcio.adicionarEndereco({
    cep: '045.77-370',
    rua: 'Galvão Riera',
    bairro: 'Jd Nobre',
    cidade: 'Contagem'
});

const contaCorrenteMarcio = new ContaCorrente({
    saldo: 15000,
    numero: 8994452,
    agencia: 442,
    senha: 1072,
    cliente: marcio
});

const karol = new Cliente({
    nome: 'Karol',
    email: 'karol@email.com',
    cpf: '322-788-123-15'
});

const contaPoupancaKarol = new ContaPoupanca({
    saldo: 100000,
    numero: 7712543,
    agencia: 592,
    senha: 1018,
    cliente: karol
});

console.log(contaCorrenteMarcio.consultarSaldo(1072));
console.log(contaCorrenteMarcio.depositar(10000));
console.log(contaCorrenteMarcio.sacar(1072, 25000));

console.log(contaPoupancaKarol.consultarSaldo(1018));
console.log(contaPoupancaKarol.depositar(20000));
console.log(contaPoupancaKarol.sacar(1018, 130000));

