O JavaScript é uma linguagem de programação amplamente utilizada para adicionar interatividade e dinamismo às páginas da web. Uma das tarefas comuns na manipulação da interface do usuário é a alteração de classes CSS de elementos HTML. Anteriormente, a forma tradicional de fazer isso era manipular a propriedade className, que envolvia trabalhar com strings e pode ser propenso a erros. No entanto, com a introdução do método classList, a partir do ECMAScript 5, essa tarefa se tornou mais fácil e segura.

O classList é uma propriedade do JavaScript que representa uma lista de classes CSS. Ele fornece métodos que facilitam a adição, remoção e verificação de classes, tornando a manipulação de classes CSS mais eficiente e menos suscetível a erros de programação.

Além do que apresentei para você em vídeo, vamos conhecer mais formas de usar o classList?

Adicionando uma classe

Para adicionar uma classe a um elemento HTML, podemos usar o método add() do classList. Este método aceita o nome da classe como argumento e adiciona a classe ao elemento, se ela ainda não estiver presente. Conforme exemplo a seguir:

const element = document.getElementById('meuElemento');
element.classList.add('minhaClasse');
COPIAR CÓDIGO
Removendo uma classe

Para remover uma classe de um elemento HTML, podemos utilizar o método remove() do classList. Este método aceita o nome da classe como argumento e remove a classe do elemento, se ela estiver presente. Veja o exemplo abaixo:

const element = document.getElementById('meuElemento');
element.classList.remove('minhaClasse');
COPIAR CÓDIGO
Alternando uma classe

O método toggle() do classList permite alternar uma classe em um elemento. Se a classe já estiver presente no elemento, o método a remove; caso contrário, ele a adiciona, conforme exemplo a seguir:

const element = document.getElementById('meuElemento');
element.classList.toggle('minhaClasse');
COPIAR CÓDIGO
Verificando se uma classe está presente

Para verificar se uma classe específica está associada a um elemento, podemos usar o método contains() do classList, como no exemplo:

const element = document.getElementById('meuElemento');
if (element.classList.contains('minhaClasse')) {
  // A classe 'minhaClasse' está presente no elemento
  // Faça algo aqui...
}
COPIAR CÓDIGO
Substituindo classes

Como feito em aula, podemos substituir uma classe por outra usando os métodos add() e remove() em sequência.

const element = document.getElementById('meuElemento');
element.classList.remove('classeAntiga');
element.classList.add('classeNova');
COPIAR CÓDIGO
Manipulando várias classes simultaneamente

É possível adicionar ou remover várias classes de uma vez usando o método add() ou remove() passando vários argumentos separados por vírgula. Veja o exemplo:

const element = document.getElementById('meuElemento');
element.classList.add('classe1', 'classe2', 'classe3');
element.classList.remove('classe2', 'classe3');
COPIAR CÓDIGO
O classList em JavaScript é uma ferramenta poderosa e eficiente para manipular classes CSS em elementos HTML. Com os métodos add(), remove(), toggle(), contains() e outras funcionalidades, podemos realizar tarefas de manipulação de classes de forma mais segura e simplificada, tornando nossas aplicações web mais interativas e dinâmicas.

Nota: Certifique-se de que o JavaScript seja carregado após a renderização do DOM, para que os elementos estejam acessíveis antes de tentar manipular suas classes.