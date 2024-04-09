# Endpoints

- **Listar Lembretes**: Exibe todos os lembretes.
- **Adicionar Lembrete**: Permite ao usuário adicionar um novo lembrete.
- **Deletar Lembrete**: Permite ao usuário excluir um lembrete existente.
- **EditarLembretes**: Permite ao usuário editar o nome de um lembrete existente.

## Instruções de Uso

- Node.js instalado.
- Acesso ao backend do Lembretes App (rodando na porta especificada nas variáveis de ambiente).

## Configuração Inicial

Clone o repositório e instale as dependências:

``sh
git clone [URL_DO_REPOSITORIO]
cd lembretes-app-frontend
npm install

## Variáveis de Ambiente

Configure as variáveis de ambiente necessárias para conectar ao backend. Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:
VITE_BACKEND_URL="http://localhost:5002"

## Execução

Para rodar o projeto localmente: npm start ou npm run dev

Isso iniciará o servidor de desenvolvimento. Abra http://localhost:3000 no navegador para acessar a aplicação.

## Testes

Para executar os testes: npm test