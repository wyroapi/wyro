# wyro en Make: publicar en redes desde tus escenarios

Publica en Instagram, Facebook, TikTok, LinkedIn, X, Threads, YouTube y Pinterest desde [Make](https://www.make.com) con la API de [wyro](https://wyroapi.com). No necesitas una app de wyro en Make: alcanza con el módulo **HTTP → Make a request**.

## 1. Tu clave

Crea una clave de prueba gratis (sin registro, 72 horas):

```bash
curl -X POST https://wyroapi.com/v1/sandbox
```

La respuesta trae `api_key` (empieza con `wyro_sk_`). Con esa clave todo es simulado: cada post devuelve un `preview_url` para ver cómo queda. Para publicar de verdad, conecta tu cuenta con el link de `next_step`.

## 2. El módulo HTTP: publicar o programar

Agrega **HTTP → Make a request** y complétalo así:

| Campo | Valor |
| - | - |
| URL | `https://wyroapi.com/v1/posts` |
| Method | `POST` |
| Headers | `Authorization` = `Bearer wyro_sk_…` |
| Body type | `Raw` |
| Content type | `JSON (application/json)` |
| Request content | el JSON de abajo |
| Parse response | `Yes` |

```json
{
  "text": "Lanzamos algo nuevo 🚀",
  "platforms": ["instagram", "linkedin"],
  "media": [{ "url": "https://wyroapi.com/social/instagram/reels/portada-hg-lunes.jpg" }],
  "scheduled_at": "2026-12-01T15:00:00-03:00"
}
```

- `text` (obligatorio). Se valida contra el límite de cada red: X 280, Threads 500, Instagram 2 200, LinkedIn 3 000.
- `platforms`: `instagram`, `facebook`, `tiktok`, `linkedin`, `x`, `threads`, `youtube`, `pinterest`. O `account_ids` (`acc_…`, de `GET /v1/accounts`) si tienes varias cuentas en la misma red.
- `media` (opcional, máx. 10): URLs públicas https. Instagram y Pinterest necesitan imagen o video; TikTok y YouTube, video.
- `scheduled_at` (opcional): ISO 8601 con zona. Sin él, se publica ya.

La respuesta (`201`) trae `id` (`post_…`), `status` (`scheduled`, `publishing`, `published`, `partial` o `failed`), `targets` y `preview_url`. Para saber si un post ya salió, agrega otro **Make a request** con `GET https://wyroapi.com/v1/posts/{{id}}` y el mismo header.

> **Ojo con las comillas.** Si mapeas un texto con comillas o saltos de línea directo en *Request content*, el JSON se rompe. Arma el body con **JSON → Create JSON** (define una estructura con `text`, `platforms` y `scheduled_at`) y mapea su salida en *Request content*.

## 3. Escenario: calendario de contenido en Google Sheets

Escribes los posts en una hoja; Make los programa y marca la fila.

**La hoja** (fila 1 con estos encabezados):

| texto | redes | imagen_url | fecha_hora | estado | post_id |
| - | - | - | - | - | - |
| Hoy lanzamos la versión 2 | linkedin,x | | 2026-12-01T15:00:00-03:00 | pendiente | |
| Mira lo nuevo 👇 | instagram | https://tu-sitio.com/foto.jpg | 2026-12-02T10:00:00-03:00 | pendiente | |

- `redes`: separadas por coma, sin espacios.
- `fecha_hora`: ISO 8601 con zona. Formatea la columna como texto para que Sheets no la convierta en fecha.

**El escenario, paso a paso:**

1. **Google Sheets → Search Rows.** Elige el documento y la hoja. Filtro: `estado` *Equal to* `pendiente`. Esto da un bundle por fila.
2. **JSON → Create JSON.** Crea una estructura con `text` (texto), `platforms` (array de texto), `media` (array de colecciones con `url`) y `scheduled_at` (texto). Mapea:
   - `text` → la columna `texto`
   - `platforms` → `split(redes; ",")`
   - `media` → un ítem con `url` = `imagen_url` (déjalo vacío si la fila no tiene imagen)
   - `scheduled_at` → `fecha_hora`
3. **HTTP → Make a request.** Como en la sección 2, con *Request content* = la salida `JSON string` del paso 2.
4. **Google Sheets → Update a Row.** Mismo documento y hoja. *Row number* = el número de fila del paso 1. Valores: `estado` = `programado`, `post_id` = `id` de la respuesta del paso 3.
5. **Manejo de errores (recomendado).** En el módulo HTTP, clic derecho → *Add error handler* → otro **Update a Row** que ponga `estado` = `error`. Así una fila con problemas (por ejemplo, Instagram sin imagen) no frena las demás.
6. **Schedule:** cada hora (o cada 15 minutos). Prueba primero con *Run once* y una clave de prueba: abre el `preview_url` de la respuesta.

Si la API rechaza un post, responde con `error.code` (por ejemplo `media_required`) y un `error.fix` que dice cómo arreglarlo. Lista completa: [wyroapi.com/docs](https://wyroapi.com/docs).

## ¿Usas n8n?

Mira las plantillas listas para importar en [`../wyro-n8n-template`](../wyro-n8n-template).

MIT
