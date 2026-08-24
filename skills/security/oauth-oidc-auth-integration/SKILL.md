---
name: oauth-oidc-auth-integration
description: Use when implementing or reviewing OAuth 2.x / OpenID Connect authorization, login, API access, PKCE, scopes, redirect URIs, access/refresh tokens, JWT validation, audience/issuer checks or multi-provider identity integrations.
---
# OAuth / OIDC Integration

## Workflow
1. Identify client, authorization server, resource server and any OpenID Provider.
2. Prefer authorization-code flow and avoid implicit-style token delivery.
3. Use PKCE (S256) for public clients and normally for confidential clients too.
4. Bind redirect URIs exactly and defend against CSRF/mix-up attacks.
5. Validate tokens for signature, issuer, audience, time and intended token use.
6. Scope tokens narrowly and protect refresh tokens with rotation or sender-constraining where supported.
7. Test replay, wrong issuer/audience, expiry and redirect manipulation.

## Conditional references
- RFC 9700 / PKCE baseline → `references/oauth-security-bcp.md`.
- Token validation → `references/token-validation.md`.

## Asset
Use `assets/oauth-review.md` for implementation review.
