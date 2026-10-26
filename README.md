# wyro API

Publica en Instagram, Facebook, TikTok, LinkedIn, X, Threads, YouTube y Pinterest desde tu agente de IA (Claude Code, Codex, Cursor, n8n). En español, y se prueba sin registro.

- Web y docs: https://wyroapi.vercel.app
- Guía para agentes: https://wyroapi.vercel.app/AGENTS.md
- MCP remoto: `https://wyroapi.vercel.app/mcp`
- MCP por stdio: `npx -y @wyroapi/mcp`
- CLI: `npx @wyroapi/wyro init`

## Claude Code

```
claude mcp add --transport http wyro https://wyroapi.vercel.app/mcp
```

Sin clave, el agente usa la herramienta `wyro_empezar` y crea una de prueba gratis.

## Este repo

`server.json` es la ficha del servidor en el [registro oficial de MCP](https://registry.modelcontextprotocol.io). La publica la acción *publish-mcp-registry* (Actions > Run workflow), que se autentica con OIDC de GitHub y no usa tokens.
