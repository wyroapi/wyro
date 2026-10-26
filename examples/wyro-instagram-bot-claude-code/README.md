# Bot de Instagram con Claude Code y wyro

Un community manager que escribe y publica en Instagram desde Claude Code, con el tono de tu marca. Usa el servidor MCP de [wyro](https://wyroapi.vercel.app).

## En 60 segundos

```bash
git clone https://github.com/wyroapi/wyro && cd wyro/examples/wyro-instagram-bot-claude-code
claude
```

Y pídele: **"Escribe un post sobre nuestro café de la semana y publícalo en Instagram"**.

La primera vez, Claude usa `wyro_empezar` para crear una clave de prueba gratis (sin registro). Guárdala y reinicia Claude Code:

```bash
export WYRO_API_KEY=wyro_sk_...
```

Con la clave de prueba todo es simulado: cada post devuelve un link de vista previa para ver cómo queda en el feed.

## Qué hay en el repo

| Archivo | Para qué |
| --- | --- |
| `.mcp.json` | Conecta Claude Code al MCP de wyro con tu `WYRO_API_KEY`. |
| `CLAUDE.md` | Instrucciones del bot: tono, formato, reglas de confirmación. |
| `marca.md` | Tu marca: edítalo con tu nombre, tono, temas e imágenes. |

## Publicar de verdad

Pídele: **"Conecta mi Instagram real"**. Te da un link: entras con Google o tu email, autorizas Instagram y la misma clave publica de verdad. Antes de cada publicación real, el bot te pide confirmación.

- Instagram pide una cuenta profesional (Business o Creator).
- Documentación: https://wyroapi.vercel.app/docs/mcp

MIT
