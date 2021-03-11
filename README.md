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

* Instale as dependências e inicie a aplicação:

```
3. yarn install
4. yarn install puppeteer (necessário para evitar conflitos)
5. yarn start
```

ou

```
3. npm install
4. npm install puppeteer (necessário para evitar conflitos)
5. npm start
```

Renomeie o arquivo `.env.example` para `.env` e preencha a variável de ambiente com o que foi fornecido.

## Capturas de tela para auxílio nos testes - Insomnia

![](/screenshots/post.png?raw=true "Rota Post")

![](/screenshots/get.png?raw=true "Rota Get")

## Autor

|  [Tiago Denicoli](https://github.com/Denicoli/)   |