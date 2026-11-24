# For MCP directories (Glama) that start the server to check it: runs the published stdio server.
# Without WYRO_API_KEY it still answers initialize and tools/list; wyro_empezar creates a free test key.
FROM node:22-alpine
RUN npm install -g @wyroapi/mcp
ENTRYPOINT ["wyro-mcp"]
