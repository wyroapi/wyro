# wyro · Python quickstart

Publica en Instagram, Facebook, TikTok, LinkedIn, X, Threads, YouTube y Pinterest desde Python con [wyro](https://wyroapi.vercel.app). Solo biblioteca estándar.

## En 30 segundos

```bash
git clone https://github.com/wyroapi/wyro && cd wyro/examples/wyro-python-quickstart
python publicar.py "Hola desde Python" linkedin
```

Sin `WYRO_API_KEY`, el script crea una clave de prueba gratis (sin registro, 72 horas). Todo es simulado y cada post devuelve un link de vista previa.

```bash
# Instagram necesita imagen o video
WYRO_API_KEY=wyro_sk_... python publicar.py "Lanzamos algo nuevo" instagram https://picsum.photos/seed/wyro/1080/1080
```

Para publicar de verdad, abre el link de `next_step` y conecta tu cuenta: la misma clave pasa a real.

- Documentación: https://wyroapi.vercel.app/docs/empezar
- Referencia para agentes: https://wyroapi.vercel.app/llms.txt

MIT
