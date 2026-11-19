# wyro para Claude Code

Publica y programa posts en Instagram, Facebook, TikTok, LinkedIn, X, Threads, YouTube y Pinterest desde Claude Code, con vista previa de cada post.

## Instalar

```
/plugin marketplace add wyroapi/wyro
/plugin install wyro@wyro
```

Desde la terminal: `claude plugin install wyro --marketplace wyroapi/wyro`.

## Conectar tu cuenta

Escribe `/mcp`, elige **wyro** y entra con Google o con tu email. No copias ninguna clave. La primera vez se crea tu cuenta gratis, en modo de prueba: todo simulado, con vista previa. Para publicar de verdad, conecta tu red con `/wyro:conectar instagram`.

## Comandos

| Comando | Qué hace |
| - | - |
| `/wyro:publicar <texto> en <redes>` | Publica o programa un post, con vista previa y tu confirmación |
| `/wyro:semana <tema>` | Planifica y programa una semana de posts, adaptados a cada red |
| `/wyro:conectar <red>` | Te da el link para conectar tu cuenta real con el login oficial de la red |
| `/wyro:cola` | Muestra los próximos horarios libres de tu cola |

También puedes pedirlo con tus palabras: «programa esto en LinkedIn mañana a las 10 y en X con una versión más corta».

## Qué datos envía

El plugin solo habla con wyro (`https://wyroapi.com/mcp/auth`), el conector que declara. Le envía el texto y los medios que pides publicar, las redes elegidas y la fecha si lo programas; wyro devuelve tus cuentas, el estado de cada post y sus métricas. Entras con tu cuenta de wyro (OAuth): el plugin no lee claves ni archivos de tu máquina. Privacidad: https://wyroapi.com/en/privacy

Guía: https://wyroapi.com/guia · Documentación: https://wyroapi.com/docs · MIT
