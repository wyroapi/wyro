# wyro · Node.js quickstart

Publica en Instagram, Facebook, TikTok, LinkedIn, X, Threads, YouTube y Pinterest desde Node.js con [wyro](https://wyroapi.vercel.app). Sin dependencias: solo `fetch`.

## En 30 segundos

```bash
git clone https://github.com/wyroapi/wyro && cd wyro/examples/wyro-node-quickstart
node publicar.mjs "Hola desde Node.js" linkedin
```

Sin `WYRO_API_KEY`, el script crea una clave de prueba gratis (sin registro, 72 horas). Todo es simulado y cada post devuelve un link de vista previa.

## Más ejemplos

```bash
# Instagram necesita imagen o video
node publicar.mjs "Lanzamos algo nuevo" instagram,linkedin https://picsum.photos/seed/wyro/1080/1080

# Con tu clave guardada en .env
cp .env.example .env   # pega tu WYRO_API_KEY
npm start
```

## Publicar de verdad

La respuesta trae `next_step` con el link para conectar tu cuenta real. Al conectarla, la misma clave publica de verdad.

- Documentación: https://wyroapi.vercel.app/docs/empezar
- Referencia para agentes: https://wyroapi.vercel.app/llms.txt

MIT
