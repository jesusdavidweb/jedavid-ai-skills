# Token Validation

A cryptographically valid JWT is not automatically authorized. Validate accepted algorithm/key, `iss`, `aud`, `exp`/`nbf`, token type/purpose and scopes/claims required for the action. ID Tokens describe an authentication event to the OIDC client; they are not generic API bearer tokens. Do not discover arbitrary JWKS/issuer URLs from attacker-controlled token content.
