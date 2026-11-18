---
name: wyro
description: Publica, programa o planifica posts en Instagram, Facebook, TikTok, LinkedIn, X, Threads, YouTube o Pinterest con wyro. Úsala cuando el usuario pida publicar, programar, armar la semana de contenido, conectar una red o ver qué tiene programado. No la uses para leer métricas.
---

# Publicar en redes con wyro

## Conexión
- Las herramientas `wyro_*` vienen del servidor MCP del plugin, que se autoriza con la cuenta de wyro del usuario. Si responden que falta iniciar sesión, dile que escriba `/mcp`, elija **wyro** y entre con Google o con su email (la primera vez se crea su cuenta, gratis, en modo de prueba). Nunca le pidas una clave ni que la pegue en el chat.
- `wyro_cuentas` lista sus redes. En modo de prueba son simuladas; para publicar de verdad, `wyro_conectar_cuenta` con la red devuelve un link que el usuario abre para autorizar con el login oficial de la red.

## Publicar
- `wyro_publicar` con `texto`, `redes` (o las cuentas) y `medios` (URLs públicas). Instagram y Pinterest necesitan imagen o video; TikTok y YouTube, video.
- **Programar:** `programar_para` en ISO 8601 con zona horaria (pregunta la zona si no la sabes), o `a_la_cola: true` para el próximo horario libre de su cola (`wyro_cuentas` con `ver_cola: true` muestra los próximos horarios).
- **Texto distinto por red:** `textos_por_red`, por ejemplo `{"linkedin": "versión profesional", "x": "versión de 280"}`. Respeta el largo de cada red.
- **Primer comentario:** `primer_comentario` (Instagram, Facebook, LinkedIn, Threads, YouTube), ideal para links o hashtags.
- Siempre muéstrale el `preview_url` de cada red.

## Reglas
- En una cuenta real, primero muestra cómo va a quedar y publica solo después de un «sí» explícito: recién ahí envía `confirmar: true`.
- Si wyro avisa que el post está duplicado, pregúntale si lo quiere igual antes de mandar `permitir_duplicado: true`.
- Si hay un error, sigue su campo «Cómo arreglarlo» y explícaselo en una frase.
- Responde en el idioma del usuario.

Guía completa y prompts: https://wyroapi.com/guia · Para agentes: https://wyroapi.com/AGENTS.md
