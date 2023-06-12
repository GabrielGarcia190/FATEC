# Servidor de Pizza

## Descrição do Projeto

Trabalho desenvolvido para a matéria do professor Eduardo da Fatec Jales. É uma API contruida com Node, Express, Prisma, SQLite, Jest, Zod, Typescript e outras tecnologias.

## Requisitos

- Node.js
- Um gerenciador de pacotes (npm, yarn ou pnpm)

## Como rodar a aplicação

No diretório do projeto, você pode executar:

`npm install`, `yarn install` ou `pnpm install` para instalar todas as depêndencias do projeto. Eu uso o `pnpm` por ser mais rápido e consumir menos espaço, por isso vou usar ele nos exemplos a seguir.

`pnpm prisma db push` para criar o banco de dados. Por padrão, o banco de dados é criado em um arquivo SQLite no diretório `./prisma/dev.db`.

`pnpm dev` para executar o servidor em modo de desenvolvimento. A aplicação estará disponível em [http://localhost:3333](http://localhost:3333).

Para executar os testes, você pode usar `pnpm test` ou `pnpm test:watch` para executar os testes em modo de observação.

Também é possível testar todas as rotas da API, para isso, com o servidor rodando, use `pnpm api-test` para executar os testes da API.
