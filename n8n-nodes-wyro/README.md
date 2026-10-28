# @wyroapi/n8n-nodes-wyro

n8n community node for [wyro API](https://wyroapi.com/n8n): publish and schedule posts on Instagram, Facebook, TikTok, LinkedIn, X, Threads, YouTube and Pinterest with one API key, without creating Meta, TikTok or LinkedIn developer apps.

## Installation

In a self-hosted n8n: **Settings → Community Nodes → Install** and enter:

```
@wyroapi/n8n-nodes-wyro
```

## Credentials

Create a **Wyro API** credential with your key (`wyro_sk_...`). To get a free test key without signing up:

```bash
curl -X POST https://wyroapi.com/v1/sandbox
```

With a test key everything is simulated: every post returns a preview link. To publish for real, use **Account → Connect**, open the link and authorize your account; the same key then publishes for real.

## Operations

| Resource | Operation | What it does |
| --- | --- | --- |
| Post | Create | Publish now or schedule (`Scheduled At`) to one or more networks, with an optional image or video |
| Post | Get | Status per network and preview link |
| Post | Get Many | Recent posts |
| Account | Get Many | Connected and simulated accounts |
| Account | Connect | Link to connect a real account |

The node can be used as a tool by n8n's AI Agent. If you prefer MCP, the **MCP Client Tool** node with the endpoint `https://wyroapi.com/mcp` works too.

## Resources

- Guide: https://wyroapi.com/n8n
- API docs (Spanish): https://wyroapi.com/docs/empezar
- Errors: https://wyroapi.com/docs/errores
- OpenAPI: https://wyroapi.com/openapi.json

## License

[MIT](LICENSE)
