# wyro para Claude Code

Publica y programa posts en Instagram, Facebook, TikTok, LinkedIn, X, Threads, YouTube y Pinterest desde Claude Code.

## Instalar

```
/plugin marketplace add wyroapi/wyro
/plugin install wyro@wyro
```

## Clave

Crea una clave de prueba gratis (sin registro): `curl -X POST https://wyroapi.com/v1/sandbox`, o pídele a Claude: "empieza con wyro".
Guárdala en tu entorno como `WYRO_API_KEY` y reinicia Claude Code.

## Uso

- "Publica en LinkedIn: lanzamos algo nuevo, y muéstrame la vista previa"
- `/wyro:publicar Hola desde mi agente en instagram` (con una imagen)

Con la clave de prueba todo es simulado y devuelve un link de vista previa. Para publicar de verdad, conecta tu cuenta con el link que te da `wyro_conectar_cuenta`.

Más: https://wyroapi.com/AGENTS.md · MIT
