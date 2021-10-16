## Descrição

Integração com o sistema Omie.

## Instalação

```bash
$ yarn
```

## Rodar projeto

```bash
# modo de desenvolvimento
$ yarn dev

# mode de produção
$ yarn start
```

## Instruções

# Configuração do .env

Configurar as variáveis a seguir no seu arquivo .env (ver .env.example)
- PORT=3000
- SECRET_KEY='secretKey'
- BASE_URL_OMIE='https://app.omie.com.br/api/v1'
- OMIE_APP_KEY='OMIE_APP_KEY'
- OMIE_APP_SECRET='OMIE_APP_SECRET'

# Configuração do ormconfig.json

Configurar os dados de acesso a seu banco de dados.
O projeto está pronto para acesso ao MS Sql Server. Para rodar com outros banco de dados favor verificar no site do [TypeORM](https://typeorm.io/#/)

## Endpoints da integração

## Autenticação

# POST /auth/token

- Para realizar a autenticação e pegar o token para acesso aos outros endpoints. Quando o projeto é iniciado ele cria um usuário para testes:
  - username: admin
  - password: admin

## Cliente

# GET /customer/get

- Para buscar um cliente. Devem ser informados os query params:
  - codigo_cliente_omie
  - codigo_cliente_integracao

# GET /customer

- Para listar os clientes. Devem ser informados os query params:
  - pagina
  - registros_por_pagina
  - apenas_importado_api

# POST /customer

- Para criar um cliente. Favor verificar a documentação dos dados no [clicando aqui](https://app.omie.com.br/api/v1/geral/clientes/#IncluirCliente)

# DELETE /customer

- Para deletar um cliente. . Devem ser informados os query params:
  - codigo_cliente_omie
  - codigo_cliente_integracao

## Pedido

# GET /order/{codigo_pedido}

- Para buscar um pedido

# GET /order

- Para listar os pedidos. Devem ser informados os query params:
  - pagina
  - registros_por_pagina
  - apenas_importado_api

# POST /order

- Para criar um pedido. Favor verificar a documentação dos dados no [clicando aqui](https://app.omie.com.br/api/v1/produtos/pedido/#IncluirPedido)

# PATCH /order

- Para trocar a etapa de um cliente. . Devem ser informados os query params:
  - codigo_pedido
  - codigo_pedido_integracao
  - etapa
