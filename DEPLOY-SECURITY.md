# OpenUI Code Code · Cyber Hunt Lab — configuração segura

Esta edição desativa o formulário BYOK e ignora credenciais de modelos enviadas pelo navegador. Configure `GROQ_API_KEY`, `OPENCODE_SERVER_URL`, `OPENCODE_SERVER_PASSWORD` e as credenciais de outros provedores diretamente no ambiente do servidor OpenCode/9Router. Não coloque chaves com prefixo `NEXT_PUBLIC_`.

**Antes de publicar:** proteja TODA a aplicação (inclusive `/api/workspace`, `/api/chat`, `/api/github/*` e `/api/providers/*`) com autenticação no proxy reverso ou gateway; não dependa de `APP_ACCESS_TOKEN` sem um mecanismo de envio seguro do lado do cliente. O token GitHub do fluxo legado ainda é digitado no navegador e deve ser substituído por GitHub App/OAuth antes de expor o serviço à Internet.

O modo workspace produz um ZIP a partir de um manifesto JSON gerado pelo modelo; não equivale a executar build/testes ou usar um executor persistente. Para executar testes reais, configure worker isolado na VPS, sem privilégios, limites de CPU/memória, acesso à rede controlado e armazenamento por projeto. Não anuncie builds como executados sem logs.

O catálogo de modelos é obtido dinamicamente do OpenCode e do 9Router; um modelo só aparece como utilizável se estiver disponível e configurado no backend.
