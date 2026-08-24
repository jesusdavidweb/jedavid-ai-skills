# Secrets in Containers and CI

Do not bake credentials into Docker layers/images. Compose can grant secrets per service and mount them under `/run/secrets`; plain env vars can leak via debugging/process/log paths. Keep CI secrets environment-scoped and restrict production access; avoid shell tracing around credentials and high-value secrets in command-line arguments.

## Sources
- https://docs.docker.com/compose/how-tos/use-secrets/
- https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html
