# Endpoints

A aplicação possui os seguintes endpoints:

`GET /reminders` (Utilizado para buscar os lembretes)  
`POST /reminders` (Utilizado para criar um lembrete)  
`DELETE /reminders/:id` (Utilizado para apagar um lembrete)

# Instruções de uso

Para rodar esse backend, é recomendável a utilização do Docker. Para instalar o docker utilize a [documentação oficial](https://docs.docker.com/get-docker/).


## Variáveis de ambiente

O backend precisa das variáveis de ambiente referentes ao banco de dados para funcionar corretamente.

Para utilizar o banco local, rodando no Docker, utilize as variáveis de ambiente de exemplo presentes na raiz do projeto:

```sh
cp .env.example .env
```

## Execução

Agora que já configurou as variáveis de ambiente, utilize o docker para rodar o projeto:

```sh
docker compose up
```

Após a finalização da build, o projeto estará executando na porta 5002.