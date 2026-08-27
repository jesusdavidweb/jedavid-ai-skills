# Installation

JeDavid AI Skills follows the portable Agent Skills `SKILL.md` convention. Use the open `skills` CLI for portable installation, or the native OpenCode HTTP catalog for zero-maintenance OpenCode updates.

## OpenCode: recommended HTTP catalog

The repository publishes a generated OpenCode V2 HTTP catalog through GitHub Pages. Add it once to your global `~/.config/opencode/opencode.jsonc`:

```jsonc
{
  "$schema": "https://opencode.ai/config.json",
  "skills": [
    "https://jesusdavidweb.github.io/jedavid-ai-skills/"
  ]
}
```

OpenCode reads `index.json` from that base URL and downloads each skill on demand. Every published skill has a deterministic content hash in its `version`; when canonical skill content changes, the version changes and OpenCode refreshes its cached copy automatically.

The HTTP catalog is generated from `skills/` on every relevant push to `main`. Never edit the generated catalog as a second source of truth.

> GitHub Pages must use **GitHub Actions** as its deployment source for the repository. The `Deploy OpenCode HTTP Catalog` workflow builds and publishes the catalog.

### OpenCode permissions

Skills use OpenCode's native `skill` permission. A permissive global setup is:

```jsonc
{
  "$schema": "https://opencode.ai/config.json",
  "skills": [
    "https://jesusdavidweb.github.io/jedavid-ai-skills/"
  ],
  "permission": {
    "skill": {
      "*": "allow"
    }
  }
}
```

Use narrower `ask`/`deny` rules when you do not want every skill available automatically.

## Browse the portable catalog

```bash
npx skills add jesusdavidweb/jedavid-ai-skills --list
```

## Install interactively

```bash
npx skills add jesusdavidweb/jedavid-ai-skills
```

## Install one skill

```bash
npx skills add jesusdavidweb/jedavid-ai-skills \
  --skill wordpress-deep-audit
```

## Target a specific agent

```bash
# OpenAI Codex
npx skills add jesusdavidweb/jedavid-ai-skills \
  --skill repo-audit -a codex

# Claude Code
npx skills add jesusdavidweb/jedavid-ai-skills \
  --skill repo-audit -a claude-code

# OpenCode (alternative to the HTTP catalog)
npx skills add jesusdavidweb/jedavid-ai-skills \
  --skill repo-audit -a opencode
```

Use `-g` to install globally and `-y` for non-interactive installs.

```bash
npx skills add jesusdavidweb/jedavid-ai-skills \
  --skill repo-audit -g -a codex -y
```

## Install all skills

```bash
npx skills add jesusdavidweb/jedavid-ai-skills --all
```

For selected agents only:

```bash
npx skills add jesusdavidweb/jedavid-ai-skills \
  --skill '*' -a codex -a claude-code -a opencode
```

## Symlink fallback

The CLI normally uses a canonical installation and symlinks skills into agent directories. If the target environment does not handle symlinks correctly, force physical copies:

```bash
npx skills add jesusdavidweb/jedavid-ai-skills \
  --skill repo-audit -a codex --copy
```

## MiniMax Code

MiniMax uses the same `npx skills add` ecosystem for Agent Skills. Because MiniMax Code's client-specific installation path is not treated here as a stable public contract, do not invent or hard-code a `.minimax/skills` directory.

```bash
npx skills add jesusdavidweb/jedavid-ai-skills -g
```

If the current `skills` CLI exposes a MiniMax-specific target, prefer that target.

## Updating CLI-installed skills

```bash
npx skills update
```

List installed skills:

```bash
npx skills list
```

OpenCode HTTP-catalog users do not need this update command for this repository; OpenCode uses the catalog versions to refresh cached remote skills.

## Use without installing

```bash
npx skills use jesusdavidweb/jedavid-ai-skills \
  --skill wordpress-deep-audit
```
