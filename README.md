# Backend TypeScript | Polimorfismo
## Sistema Bancário

**Implemente um sistema, utilizando o paradigma de orientação a objetos, que simule algumas  
funcionalidades de um sistema bancário, conforme as regras abaixo.**

1 - Implemente uma classe `Cliente` de acordo com as informações:

- Atributos
  - nome
  - email
  - cpf
  - dataCadastro (esse atributo deve ser um formato de data válido)
  - enderecos (esse atributo deve ser uma lista de endereços com as propriedades a seguir)
    - cep
    - rua
    - bairro
    - cidade

Com exceção dos atributos `dataCadastro` e `enderecos`, os demais são obrigatórios ao instanciar a classe.

O atributo `dataCadastro` deverá receber a data atual no momento em que a classe é instanciada.

A classe deverá implementar um método `adicionarEndereco` que recebe o endereço de acordo com os  
atributos acima e adicione na lista de endereços.

2 - Implemente uma classe `ContaBancaria` que receberá, obrigatóriamente, os atributos a seguir:

- Atributos
  - saldo (esse atributo só deve ser acessado pela própria classe ou por subclasses que possa  
    estendê-la, jamais publicamente)
  - numero
  - agencia
  - senha (esse atributo só deve ser acessado pela própria classe ou por subclasses que possa  
    estendê-la, jamais publicamente)
  - cliente (esse atributo deve receber um objeto, instancia da classe `Cliente`)
 
O saldo informado obrigatóriamente representa o saldo inicial da conta do cliente.

A classe deverá implementar um método `consultarSaldo`, que receba a senha e retornará o saldo no  
formato `Saldo: RS 123,45` ou a mensagem de `senha inválida`. Para que o saldo seja retornado, a senha  
passada como argumento deve ser exatamente a mesma cadastrada para o cliente.

A classe deverá exigir que dois métodos sejam implementados em subclasses que possa estendê-la.  
`depositar` que recebe um valor a ser depositado e `sacar` que recebe um valor a ser sacado em uma senha.  
Não é necessário implementar os métodos na classe `ContaBancaria`, pois ela nunca poderá ser instaciada.  
Ambas terão o saldo retornado da seguinte forma: `Saldo: R$ 123,45`

