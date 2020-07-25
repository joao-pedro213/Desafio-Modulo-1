# Desafio Modulo 1 - Bootcamp IGTI Full Stack Developer

Este projeto teve como objetivo recuperar os dados da API randomuser.me e a partir
disso criar um mecanismo de busca para poder filtar os usuários retornados. Além disso, foi necessário criar uma "tabela" reativa às buscas contendo as estatísticas
dos usuários retornados.

## Principais funcionalidades

```javascript
loadData(); // Carrega os dados dos usuários por meio da função fetch à API utilizada. para o exercício.

doSearch(); // Realiza a filtragem dosusuários com base no texto de busca digitado. Essa função será executada quando o usuário clicar no botão 'Buscar' ou clicar Enter.

render(); // Carrega na tela tanto os usuários filtrados como as estatísticas relacionadas aos usuários buscados.

countTotalMaleUSers(); // Calcula a quantidade de usuários do sexo masculino retornados na busca.

countTotalFemaleUsers(); // Calcula a quantidade de usuários do sexo femino retornados na busca.

sumUsersAge(); // Realiza a soma das idades de todos os usuários retornados na busca.

doAvg(); // Realiza a média da idade de todos os usuários retornados na busca.

handleSearchBtn(); // Monitora o input[text] verificando se ele possuí algum valor ou não. Caso o usuário não digite nada para buscar o botão ficará desabilitado.
```
