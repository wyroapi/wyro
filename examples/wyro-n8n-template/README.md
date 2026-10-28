# Plantilla de n8n: publicar en redes con wyro

Publica en Instagram, Facebook, TikTok, LinkedIn, X, Threads, YouTube y Pinterest desde tus flujos de n8n, sin crear apps de Meta ni TikTok. Usa la API de [wyro](https://wyroapi.com).

> **¿Prefieres un nodo?** En n8n self-hosted: **Settings → Community Nodes → Install** → `@wyroapi/n8n-nodes-wyro`. Trae Publicar, Estado del post y Conectar cuenta, y sirve como herramienta de un AI Agent.

## Usarla

1. Crea una clave de prueba gratis (sin registro):
   ```bash
   curl -X POST https://wyroapi.com/v1/sandbox
   ```
2. En n8n: **Workflows → Import from File** → `wyro-publicar.json`.
3. En el nodo **Publicar con wyro**, reemplaza `TU_CLAVE` en el header `Authorization` por tu clave.
4. Ejecuta el flujo. La respuesta trae `preview_url`: ábrelo para ver cómo queda el post.

El flujo es: **Trigger manual → Texto del post → HTTP Request a `POST /v1/posts`**. Cambia el nodo de texto por tu nodo de IA (OpenAI, Claude, Gemini) para que el post se escriba solo, y el trigger por un Schedule o un Webhook.

## Cambiar las redes o agregar imagen

En el body del HTTP Request:

```json
{ "text": "{{ $json.texto }}", "platforms": ["instagram", "linkedin"], "media": [{ "url": "https://..." }] }
```

Instagram y Pinterest necesitan imagen o video; TikTok y YouTube, video.

## Con agentes de IA en n8n

Usa el nodo **MCP Client Tool**: endpoint `https://wyroapi.com/mcp`, transporte HTTP Streamable, autenticación Bearer con tu clave.

Con la clave de prueba todo es simulado. Para publicar de verdad, conecta tu cuenta con el link de `next_step`.

MIT
