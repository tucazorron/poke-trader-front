# Poke Trader - Frontend

## Desenvolvedor

Artur Zorron

## Endereço

https://poke-trader.netlify.app

## Framework

React JS

## Requisições

| Tipo | Endpoint | Body | Função |
|------|----------|------|--------|
| GET | http://pokeapi.co/api/v2/pokemon | vazio | coletar todos os pokemons disponiveis |
| POST | https://poke-trader-back.herokuapp.com/trades | duas listas de objetos onde cada objeto contem o id do pokemon e o nome do pokemon | enviar para o backend informações necessárias para criar uma troca no banco de dados |
| GET | https://poke-trader-back.herokuapp.com | vazio | receber uma lista com todos as trocas realizadas salvas no banco de dados

## Páginas

| Arquivo | Endereço | Função |
|---------|----------|--------|
| Trade.js | "/" | realizar uma troca de pokemons entre dois jogadores
| History.js | "/history" | mostrar todas as trocas já realizadas que estão salvas no banco de dados