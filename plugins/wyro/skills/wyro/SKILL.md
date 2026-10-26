---
name: wyro
description: Publica o programa posts en Instagram, Facebook, TikTok, LinkedIn, X, Threads, YouTube o Pinterest con wyro. Úsala cuando el usuario pida publicar, programar o probar contenido en redes sociales. No la uses para leer métricas.
---

# Publicar en redes con wyro

1. **Clave.** Si las herramientas `wyro_*` dicen que falta la clave, llama a `wyro_empezar`: crea una clave de prueba gratis (72 horas, todo simulado). Pídele al usuario que la guarde como `WYRO_API_KEY` en su entorno y reinicie Claude Code. Mientras tanto puedes usar la API REST con esa clave: `POST https://wyroapi.vercel.app/v1/posts` con el header `Authorization: Bearer <clave>`.
2. **Cuentas.** `wyro_cuentas` muestra a qué redes puedes publicar (simuladas en modo prueba).
3. **Publicar.** `wyro_publicar` con `texto`, `redes` y, si hace falta, `medios` (URLs públicas). Instagram y Pinterest necesitan imagen o video; TikTok y YouTube, video.
4. **Mostrar.** Siempre muéstrale al usuario el `preview_url` que devuelve.
5. **Real.** Para publicar de verdad, `wyro_conectar_cuenta` devuelve el link que el usuario abre para conectar su cuenta. La misma clave pasa a real.

Reglas:
- Nunca publiques en una cuenta real sin confirmación explícita del usuario (envía `confirmar: true` solo después de esa confirmación).
- Si hay un error, sigue su campo "Cómo arreglarlo".

Guía completa: https://wyroapi.vercel.app/AGENTS.md
