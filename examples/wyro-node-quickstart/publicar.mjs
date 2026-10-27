// Publica (o simula) un post en varias redes con wyro y espera el resultado. Sin dependencias.
// Uso: node publicar.mjs "Texto del post" linkedin,instagram https://url/de/la/imagen.jpg
const BASE = (process.env.WYRO_API_URL ?? "https://wyroapi.com").replace(/\/$/, "");

async function api(method, path, body, key) {
  const res = await fetch(`${BASE}/v1${path}`, {
    method,
    headers: { "content-type": "application/json", ...(key ? { authorization: `Bearer ${key}` } : {}) },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json();
  if (!res.ok) {
    // Cada error dice qué pasó y cómo arreglarlo.
    throw new Error(`${data.error.code}: ${data.error.message.es}\nCómo arreglarlo: ${data.error.fix.es}`);
  }
  return data;
}

let key = process.env.WYRO_API_KEY;
if (!key) {
  // Sin clave: crea una de prueba gratis (72 horas, todo simulado). Guárdala en .env como WYRO_API_KEY.
  const sandbox = await api("POST", "/sandbox?utm_source=github&utm_campaign=node-quickstart");
  key = sandbox.api_key;
  console.log(`Clave de prueba creada: ${key}\nGuárdala en .env como WYRO_API_KEY.\n`);
}

const [text = "Hola desde Node.js y wyro", networks = "linkedin", image] = process.argv.slice(2);
const post = await api(
  "POST",
  "/posts",
  { text, platforms: networks.split(","), ...(image ? { media: [{ url: image }] } : {}) },
  key,
);

console.log(`${post.simulated ? "Simulado" : "Publicado"}: ${post.id} (${post.status})`);
for (const t of post.targets) console.log(`  ${t.platform}: ${t.published_url ?? t.preview_url}`);
console.log(`\n${post.next_step}`);
