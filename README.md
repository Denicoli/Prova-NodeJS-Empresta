# Prova NodeJS - Empresta Bem Melhor

## API NodeJS desenvolvida para retirar dados específicos do site Portal da Transparência utilizando a ferramenta Puppeteer e popular um banco de dados NoSQL com as informações adquiridas.

### Features

- [x] Raspagem de dados
- [x] Armazenamento no banco de dados
- [x] Listagem dos dados

## Instalando a API

## Banco de dados

O projeto usa [MongoDB](https://www.mongodb.com) como banco de dados.

## API

* Para baixar o projeto siga as instruções abaixo:

```
1. git clone https://gitlab.com/Denicoli/prova-node.git
2. cd prova-node

```
Renomeie o arquivo `.env.example` para `.env` e preencha a variável de ambiente com o que foi fornecido.

* Instale as dependências:

```
3. yarn install

```

ou

```
3. npm install

```
*  Inicie a aplicação:

```
4. yarn start

```

ou

```
4. npm start

```

## Informações importantes

Como se trata de um site governamental com muitos dados e de uma aplicação que envolve inserção em um banco de dados, é necessário aguardar alguns minutos para listar os dados do banco, caso contrário a listagem virá vazia.

## Capturas de tela para auxílio nos testes - Insomnia

![](/screenshots/post.png?raw=true "Rota Post")

![](/screenshots/get.png?raw=true "Rota Get")

## Autor

|  [Tiago Denicoli](https://github.com/Denicoli/)   |