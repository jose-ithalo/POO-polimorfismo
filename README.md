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
