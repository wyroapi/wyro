# wyro API: the connector that lets Claude post on Instagram, TikTok and LinkedIn

**English** · [Español](README.es.md) · [Português](README.pt.md)

[![npm @wyroapi/mcp](https://img.shields.io/npm/v/@wyroapi/mcp?label=%40wyroapi%2Fmcp)](https://www.npmjs.com/package/@wyroapi/mcp)
[![npm @wyroapi/wyro](https://img.shields.io/npm/v/@wyroapi/wyro?label=CLI%20%40wyroapi%2Fwyro)](https://www.npmjs.com/package/@wyroapi/wyro)
[![MCP Registry](https://img.shields.io/badge/MCP%20Registry-io.github.wyroapi%2Fwyro-2440E6)](https://registry.modelcontextprotocol.io/v0/servers?search=io.github.wyroapi/wyro)
[![Listed on mcpservers.org](https://mcpservers.org/badge.svg)](https://mcpservers.org/servers/wyroapi/wyro)
[![License: MIT](https://img.shields.io/badge/license-MIT-black)](LICENSE)

**wyro is the connector that lets Claude post and schedule on Instagram, Facebook, TikTok, LinkedIn, X, Threads, YouTube and Pinterest.** Paste a link into Claude (web, desktop or Cowork: Customize → Connectors → Add custom connector) and ask it to "post this tomorrow at 10am". Nothing goes out on your account without your "yes". 1-minute guide: https://wyroapi.com/en/guide

It also works in Claude Code, Codex, Cursor and n8n, as a remote MCP server, a REST API and a CLI. In English, Spanish and Portuguese, and free to try with no sign-up: test posts are simulated and return a preview.

- Website and docs: https://wyroapi.com/en · [Docs](https://wyroapi.com/en/docs/getting-started)
- Guide for agents: https://wyroapi.com/AGENTS.md · [llms.txt](https://wyroapi.com/en/llms.txt) · [OpenAPI](https://wyroapi.com/en/openapi.json)
- Remote MCP (Streamable HTTP): `https://wyroapi.com/mcp`
- Stdio MCP: `npx -y @wyroapi/mcp`
- CLI: `npx @wyroapi/wyro init`

## Get started in 1 minute

### Claude (web, desktop or Cowork)

1. Copy your connector link at https://wyroapi.com/en/guide (free, no sign-up).
2. In Claude: **Customize → Connectors → Add custom connector**. Name: `wyro`. URL: your link.
3. In a new chat: "I just installed wyro, how does it work?".

### Claude Code

With the plugin: MCP signed in with your wyro account (run `/mcp` → wyro, no key to copy), a skill and the `/wyro:publicar`, `/wyro:semana`, `/wyro:conectar` and `/wyro:cola` commands:

```
/plugin marketplace add wyroapi/wyro
/plugin install wyro@wyro
```

Or just the MCP:

```
claude mcp add --transport http wyro "https://wyroapi.com/mcp?lang=en"
```

Without a key, the agent uses the `wyro_empezar` tool and creates a free test key. With the test key everything is simulated and returns a preview link.

### Codex

```toml
# ~/.codex/config.toml (with WYRO_API_KEY exported)
[mcp_servers.wyro]
url = "https://wyroapi.com/mcp?lang=en"
bearer_token_env_var = "WYRO_API_KEY"
```

### Cursor

```json
{ "mcpServers": { "wyro": { "url": "https://wyroapi.com/mcp?lang=en", "headers": { "Authorization": "Bearer wyro_sk_..." } } } }
```

### REST API

```bash
curl -X POST "https://wyroapi.com/v1/sandbox?lang=en"   # test key, no sign-up
curl -X POST https://wyroapi.com/v1/posts \
  -H "Authorization: Bearer wyro_sk_..." -H "Content-Type: application/json" \
  -d '{"text":"Hello from my agent","platforms":["linkedin"]}'
```

## MCP tools

| Tool | What it does |
| --- | --- |
| `wyro_empezar` | Creates a free test key |
| `wyro_cuentas` | Lists the connected accounts |
| `wyro_publicar` | Publishes or schedules (text, networks, images and videos, time zone). Asks for confirmation on real accounts |
| `wyro_estado_post` | Status per network and preview |
| `wyro_conectar_cuenta` | Link to connect a real account |

Tool names stay the same in every language. Language: tool descriptions, `next_step` hints and errors follow `?lang=` on the remote MCP URL (`es`, `en` or `pt`); otherwise the language of your key's workspace (a key created from https://wyroapi.com/en is in English); otherwise Spanish. With the stdio MCP, set `WYRO_LANG`:

```json
{
  "mcpServers": {
    "wyro": {
      "command": "npx",
      "args": ["-y", "@wyroapi/mcp"],
      "env": { "WYRO_API_KEY": "wyro_sk_...", "WYRO_LANG": "en" }
    }
  }
}
```

## Publishing for real

Ask the agent to connect your account: it gives you a link, you sign in with Google or your email, authorize the network, and the same key starts publishing for real. No apps to create and no Meta, TikTok or LinkedIn reviews to pass. 7-day trial with 1 account; then USD 5 per account a month ([pricing](https://wyroapi.com/en/pricing)).

## Examples

| Folder | What it does |
| --- | --- |
| [`examples/wyro-node-quickstart`](examples/wyro-node-quickstart) | Post from Node |
| [`examples/wyro-python-quickstart`](examples/wyro-python-quickstart) | Post from Python |
| [`examples/wyro-instagram-bot-claude-code`](examples/wyro-instagram-bot-claude-code) | A community manager in Claude Code that writes and posts to Instagram in your brand's voice |
| [`examples/wyro-n8n-template`](examples/wyro-n8n-template) | n8n workflow ready to import |

## Guides

- [Post to Instagram from Claude Code](https://wyroapi.com/en/blog/post-to-instagram-from-claude-code)
- [Schedule Instagram posts from Codex or Cursor](https://wyroapi.com/en/blog/schedule-instagram-posts-codex-cursor)
- [An MCP to post on LinkedIn](https://wyroapi.com/en/blog/linkedin-mcp)
- [Post to TikTok through an API without an audit](https://wyroapi.com/en/blog/tiktok-api-without-audit)
- [Instagram, TikTok and LinkedIn with n8n](https://wyroapi.com/en/blog/n8n-instagram-tiktok-linkedin)
- Docs: [getting started](https://wyroapi.com/en/docs/getting-started) · [publish](https://wyroapi.com/en/docs/publish) · [MCP](https://wyroapi.com/en/docs/mcp) · [errors](https://wyroapi.com/en/docs/errors)

## Help

Something not working or missing? Open an [issue](https://github.com/wyroapi/wyro/issues) (with the error's `request_id` if you have it).

## This repo

- `.claude-plugin/` and `plugins/wyro/`: the Claude Code plugin.
- `examples/`: the examples.
- `server.json`: the listing on the [official MCP registry](https://registry.modelcontextprotocol.io). It's published by the *publish-mcp-registry* action with GitHub OIDC.

MIT
