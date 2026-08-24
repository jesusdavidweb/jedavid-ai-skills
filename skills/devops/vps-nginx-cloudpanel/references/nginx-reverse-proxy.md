# Nginx Reverse Proxy Triage

Inspect `nginx -T`, not only a guessed vhost file. Verify `server_name`, listen/TLS blocks, redirect chains, `proxy_pass`/FastCGI upstream, forwarded/WebSocket headers when required, document root and deny rules. Run `nginx -t` before reload. Successful reload is not application verification; test the real hostname and upstream.

## Sources
- https://nginx.org/en/docs/http/ngx_http_proxy_module.html
