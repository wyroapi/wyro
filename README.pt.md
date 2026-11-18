# wyro API: o conector que permite ao Claude publicar no Instagram, TikTok e LinkedIn

[English](README.md) · [Español](README.es.md) · **Português**

[![npm @wyroapi/mcp](https://img.shields.io/npm/v/@wyroapi/mcp?label=%40wyroapi%2Fmcp)](https://www.npmjs.com/package/@wyroapi/mcp)
[![npm @wyroapi/wyro](https://img.shields.io/npm/v/@wyroapi/wyro?label=CLI%20%40wyroapi%2Fwyro)](https://www.npmjs.com/package/@wyroapi/wyro)
[![MCP Registry](https://img.shields.io/badge/MCP%20Registry-io.github.wyroapi%2Fwyro-2440E6)](https://registry.modelcontextprotocol.io/v0/servers?search=io.github.wyroapi/wyro)
[![Listed on mcpservers.org](https://mcpservers.org/badge.svg)](https://mcpservers.org/servers/wyroapi/wyro)
[![License: MIT](https://img.shields.io/badge/license-MIT-black)](LICENSE)

**O wyro é o conector que permite ao Claude publicar e agendar posts no Instagram, Facebook, TikTok, LinkedIn, X, Threads, YouTube e Pinterest.** Você cola um link no Claude (web, desktop ou Cowork: Personalizar → Conectores → Adicionar conector personalizado) e pede «publica isso amanhã às 10h». Nada sai na sua conta sem o seu «sim». Guia de 1 minuto: https://wyroapi.com/pt/guia

Também funciona no Claude Code, Codex, Cursor e n8n, como servidor MCP remoto, API REST e CLI. Em português, inglês e espanhol, e dá para testar grátis e sem cadastro: as publicações de teste são simuladas e devolvem uma prévia.

- Site e docs: https://wyroapi.com/pt · [Docs](https://wyroapi.com/pt/docs/comecar)
- Guia para agentes: https://wyroapi.com/AGENTS.md · [llms.txt](https://wyroapi.com/pt/llms.txt) · [OpenAPI](https://wyroapi.com/pt/openapi.json)
- MCP remoto (Streamable HTTP): `https://wyroapi.com/mcp`
- MCP por stdio: `npx -y @wyroapi/mcp`
- CLI: `npx @wyroapi/wyro init`

## Comece em 1 minuto

### Claude (web, desktop ou Cowork)

1. Copie o seu link de conector em https://wyroapi.com/pt/guia (grátis, sem cadastro).
2. No Claude: **Personalizar → Conectores → Adicionar conector personalizado**. Nome: `wyro`. URL: o seu link.
3. Num chat novo: «Acabei de instalar o wyro, como funciona?».

### Claude Code

Com o plugin: MCP com a sua conta da wyro (digite `/mcp` → wyro, sem copiar chaves), uma skill e os comandos `/wyro:publicar`, `/wyro:semana`, `/wyro:conectar` e `/wyro:cola`:

```
/plugin marketplace add wyroapi/wyro
/plugin install wyro@wyro
```

Ou só o MCP:

```
claude mcp add --transport http wyro "https://wyroapi.com/mcp?lang=pt"
```

Sem chave, o agente usa a ferramenta `wyro_empezar` e cria uma de teste grátis. Com a chave de teste, tudo é simulado e devolve um link de prévia.

### Codex

```toml
# ~/.codex/config.toml (com WYRO_API_KEY exportada)
[mcp_servers.wyro]
url = "https://wyroapi.com/mcp?lang=pt"
bearer_token_env_var = "WYRO_API_KEY"
```

### Cursor

```json
{ "mcpServers": { "wyro": { "url": "https://wyroapi.com/mcp?lang=pt", "headers": { "Authorization": "Bearer wyro_sk_..." } } } }
```

### API REST

```bash
curl -X POST "https://wyroapi.com/v1/sandbox?lang=pt"   # chave de teste, sem cadastro
curl -X POST https://wyroapi.com/v1/posts \
  -H "Authorization: Bearer wyro_sk_..." -H "Content-Type: application/json" \
  -d '{"text":"Olá do meu agente","platforms":["linkedin"]}'
```

## Ferramentas MCP

| Ferramenta | Para quê |
| --- | --- |
| `wyro_empezar` | Cria uma chave de teste grátis |
| `wyro_cuentas` | Lista as contas conectadas |
| `wyro_publicar` | Publica ou agenda (texto, redes, imagens e vídeos, fuso horário). Pede confirmação em contas reais |
| `wyro_estado_post` | Status por rede e prévia |
| `wyro_conectar_cuenta` | Link para conectar uma conta real |

Os nomes das ferramentas são os mesmos em todos os idiomas. Idioma: as descrições das ferramentas, os `next_step` e os erros seguem o `?lang=` da URL do MCP remoto (`es`, `en` ou `pt`); senão, o idioma do workspace da sua chave (uma chave criada em https://wyroapi.com/pt fica em português); senão, espanhol. Com o MCP por stdio, use a variável `WYRO_LANG`:

```json
{
  "mcpServers": {
    "wyro": {
      "command": "npx",
      "args": ["-y", "@wyroapi/mcp"],
      "env": { "WYRO_API_KEY": "wyro_sk_...", "WYRO_LANG": "pt" }
    }
  }
}
```

## Publicar de verdade

Peça ao agente para conectar a sua conta: ele te dá um link, você entra com o Google ou com o seu e-mail, autoriza a rede e a mesma chave passa a publicar de verdade. Sem criar apps nem passar por revisões da Meta, do TikTok ou do LinkedIn. 7 dias de teste com 1 conta; depois, USD 5 por conta por mês ([preços](https://wyroapi.com/pt/precos)).

## Exemplos

| Pasta | O que faz |
| --- | --- |
| [`examples/wyro-node-quickstart`](examples/wyro-node-quickstart) | Publicar a partir do Node |
| [`examples/wyro-python-quickstart`](examples/wyro-python-quickstart) | Publicar a partir do Python |
| [`examples/wyro-instagram-bot-claude-code`](examples/wyro-instagram-bot-claude-code) | Um social media no Claude Code que escreve e publica no Instagram com o tom da sua marca |
| [`examples/wyro-n8n-template`](examples/wyro-n8n-template) | Fluxo do n8n pronto para importar |

## Guias

- [Publicar no Instagram pelo Claude Code](https://wyroapi.com/pt/blog/publicar-no-instagram-pelo-claude-code)
- [Agendar posts do Instagram pelo Codex ou Cursor](https://wyroapi.com/pt/blog/agendar-posts-instagram-codex-cursor)
- [MCP para publicar no LinkedIn](https://wyroapi.com/pt/blog/mcp-linkedin)
- [Publicar no TikTok por API sem auditoria](https://wyroapi.com/pt/blog/api-tiktok-sem-auditoria)
- [Instagram, TikTok e LinkedIn com n8n](https://wyroapi.com/pt/blog/n8n-instagram-tiktok-linkedin)
- Docs: [começar](https://wyroapi.com/pt/docs/comecar) · [publicar](https://wyroapi.com/pt/docs/publicar) · [MCP](https://wyroapi.com/pt/docs/mcp) · [erros](https://wyroapi.com/pt/docs/erros)

## Ajuda

Algo não funciona ou está faltando? Abra uma [issue](https://github.com/wyroapi/wyro/issues) (com o `request_id` do erro, se tiver).

## Este repo

- `.claude-plugin/` e `plugins/wyro/`: o plugin do Claude Code.
- `examples/`: os exemplos.
- `server.json`: a ficha no [registro oficial de MCP](https://registry.modelcontextprotocol.io). É publicada pela action *publish-mcp-registry* com OIDC do GitHub.

MIT
