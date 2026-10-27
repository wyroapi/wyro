# wyro API: social media MCP server and API for AI agents

[![npm @wyroapi/mcp](https://img.shields.io/npm/v/@wyroapi/mcp?label=%40wyroapi%2Fmcp)](https://www.npmjs.com/package/@wyroapi/mcp)
[![npm @wyroapi/wyro](https://img.shields.io/npm/v/@wyroapi/wyro?label=CLI%20%40wyroapi%2Fwyro)](https://www.npmjs.com/package/@wyroapi/wyro)
[![MCP Registry](https://img.shields.io/badge/MCP%20Registry-io.github.wyroapi%2Fwyro-2440E6)](https://registry.modelcontextprotocol.io/v0/servers?search=io.github.wyroapi/wyro)
[![License: MIT](https://img.shields.io/badge/license-MIT-black)](LICENSE)

Publica y programa posts en **Instagram, Facebook, TikTok, LinkedIn, X, Threads, YouTube y Pinterest** desde tu agente de IA (**Claude Code, Codex, Cursor, n8n**). Servidor MCP remoto, API REST y CLI. En español, y se prueba sin registro.

*English: a remote MCP server and REST API that lets AI agents post and schedule content on 8 social networks. Free sandbox key, no sign-up. → https://wyroapi.com/en*

- Web y docs: https://wyroapi.com
- Guía para agentes: https://wyroapi.com/AGENTS.md · [llms.txt](https://wyroapi.com/llms.txt) · [OpenAPI](https://wyroapi.com/openapi.json)
- MCP remoto (Streamable HTTP): `https://wyroapi.com/mcp`
- MCP por stdio: `npx -y @wyroapi/mcp`
- CLI: `npx @wyroapi/wyro init`

## Empezar en 1 minuto

### Claude Code

Con el plugin (MCP, skill y el comando `/wyro:publicar`):

```
/plugin marketplace add wyroapi/wyro
/plugin install wyro@wyro
```

O solo el MCP:

```
claude mcp add --transport http wyro https://wyroapi.com/mcp
```

Sin clave, el agente usa la herramienta `wyro_empezar` y crea una de prueba gratis. Con la clave de prueba todo es simulado y devuelve un link de vista previa.

### Codex

```toml
# ~/.codex/config.toml (con WYRO_API_KEY exportada)
[mcp_servers.wyro]
url = "https://wyroapi.com/mcp"
bearer_token_env_var = "WYRO_API_KEY"
```

### Cursor

```json
{ "mcpServers": { "wyro": { "url": "https://wyroapi.com/mcp", "headers": { "Authorization": "Bearer wyro_sk_..." } } } }
```

### API REST

```bash
curl -X POST https://wyroapi.com/v1/sandbox          # clave de prueba, sin registro
curl -X POST https://wyroapi.com/v1/posts \
  -H "Authorization: Bearer wyro_sk_..." -H "Content-Type: application/json" \
  -d '{"text":"Hola desde mi agente","platforms":["linkedin"]}'
```

## Herramientas MCP

| Herramienta | Para qué |
| --- | --- |
| `wyro_empezar` | Crea una clave de prueba gratis |
| `wyro_cuentas` | Lista las cuentas conectadas |
| `wyro_publicar` | Publica o programa (texto, redes, imágenes y videos, zona horaria). Pide confirmación en cuentas reales |
| `wyro_estado_post` | Estado por red y vista previa |
| `wyro_conectar_cuenta` | Link para conectar una cuenta real |

## Publicar de verdad

Pídele al agente que conecte tu cuenta: te da un link, entras con Google o tu email, autorizas la red y la misma clave pasa a publicar de verdad. Sin crear apps ni pasar revisiones de Meta, TikTok o LinkedIn. 7 días de prueba con 1 cuenta; después USD 5 por cuenta al mes.

## Ejemplos

| Carpeta | Qué hace |
| --- | --- |
| [`examples/wyro-node-quickstart`](examples/wyro-node-quickstart) | Publicar desde Node |
| [`examples/wyro-python-quickstart`](examples/wyro-python-quickstart) | Publicar desde Python |
| [`examples/wyro-instagram-bot-claude-code`](examples/wyro-instagram-bot-claude-code) | Un community manager en Claude Code que escribe y publica en Instagram con el tono de tu marca |
| [`examples/wyro-n8n-template`](examples/wyro-n8n-template) | Flujo de n8n listo para importar |

## Guías

- [Publicar en Instagram desde Claude Code](https://wyroapi.com/blog/instagram-desde-claude-code)
- [Programar posts de Instagram desde Codex o Cursor](https://wyroapi.com/blog/programar-posts-instagram-codex-cursor)
- [MCP para publicar en LinkedIn](https://wyroapi.com/blog/mcp-linkedin)
- [Publicar en TikTok por API sin auditoría](https://wyroapi.com/blog/tiktok-api-sin-auditoria)
- [Instagram, TikTok y LinkedIn con n8n](https://wyroapi.com/blog/n8n-instagram-tiktok-linkedin)

## Ayuda

¿Algo no funciona o falta algo? Abre un [issue](https://github.com/wyroapi/wyro/issues) (con el `request_id` del error si lo tienes).

## Este repo

- `.claude-plugin/` y `plugins/wyro/`: el plugin de Claude Code.
- `examples/`: los ejemplos.
- `server.json`: la ficha en el [registro oficial de MCP](https://registry.modelcontextprotocol.io). La publica la acción *publish-mcp-registry* con OIDC de GitHub.

MIT
