import { Cliente } from "./Cliente";

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

