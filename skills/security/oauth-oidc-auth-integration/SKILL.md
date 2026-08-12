---
name: oauth-oidc-auth-integration
description: Use when implementing or debugging OAuth 2.0, OpenID Connect, social login, API authorization, scopes, redirect URIs, PKCE, service accounts, or invalid_scope/consent failures.
---
# OAuth and OIDC Integration
## Workflow
1. Identify whether the need is authentication, delegated authorization, machine-to-machine access, or a combination.
2. Verify provider metadata and current official documentation before selecting flows/scopes.
3. Use Authorization Code + PKCE for public/browser-native clients where supported; keep confidential-client secrets server-side.
4. Match redirect URIs exactly and bind state/nonce to the initiating session.
5. Request the minimum scopes needed and map every scope to an actual capability.
6. Validate issuer, audience, signature, expiry and nonce for ID/access tokens as applicable.
7. Store refresh tokens securely and implement rotation/revocation handling.
8. Diagnose `invalid_scope` from the exact authorization/token request and provider-allowed scope set instead of guessing broader permissions.
## Verification
Success, denied consent, expired code, wrong redirect, bad state/nonce, revoked refresh token and insufficient scope.