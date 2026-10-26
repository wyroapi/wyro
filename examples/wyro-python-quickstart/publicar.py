"""Publica (o simula) un post en varias redes con wyro. Solo biblioteca estándar.

Uso: python publicar.py "Texto del post" linkedin,instagram https://url/de/la/imagen.jpg
"""
import json
import os
import sys
import urllib.error
import urllib.request

BASE = os.environ.get("WYRO_API_URL", "https://wyroapi.vercel.app").rstrip("/")


def api(method, path, body=None, key=None):
    headers = {"content-type": "application/json", "user-agent": "wyro-python-quickstart"}
    if key:
        headers["authorization"] = f"Bearer {key}"
    data = json.dumps(body).encode() if body is not None else None
    req = urllib.request.Request(f"{BASE}/v1{path}", data=data, headers=headers, method=method)
    try:
        with urllib.request.urlopen(req) as res:
            return json.load(res)
    except urllib.error.HTTPError as err:
        # Cada error dice qué pasó y cómo arreglarlo.
        e = json.load(err)["error"]
        sys.exit(f"{e['code']}: {e['message']['es']}\nCómo arreglarlo: {e['fix']['es']}")


key = os.environ.get("WYRO_API_KEY")
if not key:
    # Sin clave: crea una de prueba gratis (72 horas, todo simulado).
    key = api("POST", "/sandbox?utm_source=github&utm_campaign=python-quickstart")["api_key"]
    print(f"Clave de prueba creada: {key}\nGuárdala como WYRO_API_KEY.\n")

args = sys.argv[1:]
text = args[0] if len(args) > 0 else "Hola desde Python y wyro"
networks = (args[1] if len(args) > 1 else "linkedin").split(",")
body = {"text": text, "platforms": networks}
if len(args) > 2:
    body["media"] = [{"url": args[2]}]

post = api("POST", "/posts", body, key)
print(f"{'Simulado' if post['simulated'] else 'Publicado'}: {post['id']} ({post['status']})")
for t in post["targets"]:
    print(f"  {t['platform']}: {t.get('published_url') or t['preview_url']}")
print(f"\n{post['next_step']}")
