# wyro API

Publica en Instagram, Facebook, TikTok, LinkedIn, X, Threads, YouTube y Pinterest desde tu agente de IA (Claude Code, Codex, Cursor, n8n). En español, y se prueba sin registro.

- Web y docs: https://wyroapi.vercel.app
- Guía para agentes: https://wyroapi.vercel.app/AGENTS.md
- MCP remoto: `https://wyroapi.vercel.app/mcp`
- MCP por stdio: `npx -y @wyroapi/mcp`
- CLI: `npx @wyroapi/wyro init`

## Claude Code

Con el plugin (MCP, skill y el comando `/wyro:publicar`):

```
/plugin marketplace add wyroapi/wyro
/plugin install wyro@wyro
```

O solo el MCP:

```
claude mcp add --transport http wyro https://wyroapi.vercel.app/mcp
```

Sin clave, el agente usa la herramienta `wyro_empezar` y crea una de prueba gratis. Con la clave de prueba todo es simulado y devuelve un link de vista previa.

## Ejemplos

| Carpeta | Qué hace |
| --- | --- |
| [`examples/wyro-node-quickstart`](examples/wyro-node-quickstart) | Publicar desde Node |
| [`examples/wyro-python-quickstart`](examples/wyro-python-quickstart) | Publicar desde Python |
| [`examples/wyro-instagram-bot-claude-code`](examples/wyro-instagram-bot-claude-code) | Un community manager en Claude Code que escribe y publica en Instagram con el tono de tu marca |
| [`examples/wyro-n8n-template`](examples/wyro-n8n-template) | Flujo de n8n listo para importar |

## Ayuda

¿Algo no funciona o falta algo? Abre un [issue](https://github.com/wyroapi/wyro/issues) (con el `request_id` del error si lo tienes).

## Este repo

- `.claude-plugin/` y `plugins/wyro/`: el plugin de Claude Code.
- `server.json`: la ficha del servidor en el [registro oficial de MCP](https://registry.modelcontextprotocol.io). La publica la acción *publish-mcp-registry* (Actions > Run workflow), con OIDC de GitHub y sin tokens.

MIT
