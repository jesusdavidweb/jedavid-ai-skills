# Installation

JeDavid AI Skills follows the portable Agent Skills `SKILL.md` convention. Use the open `skills` CLI for portable installation, or the native OpenCode V2 HTTP catalog for zero-maintenance OpenCode updates.

## Package runners

The repository does not depend on npm specifically. `skills` can be executed with the JavaScript package runner you already use:

```bash
# npm
npx skills add jesusdavidweb/skills

# pnpm
pnpm dlx skills add jesusdavidweb/skills

# Bun
bunx skills add jesusdavidweb/skills

# Yarn
yarn dlx skills add jesusdavidweb/skills
```

The examples below use `npx` for brevity. Replace `npx skills` with `pnpm dlx skills`, `bunx skills`, or `yarn dlx skills` while keeping the remaining arguments unchanged.

## OpenCode V2: recommended HTTP catalog

The repository publishes a generated OpenCode V2 HTTP catalog at `https://skills.jesusdavid.net/`. Add it once to your global `~/.config/opencode/opencode.jsonc`:

```jsonc
{
  "$schema": "https://opencode.ai/config.json",
  "skills": [
    "https://skills.jesusdavid.net/"
  ]
}
```

OpenCode reads `index.json` from that base URL and downloads each skill on demand. Every published skill has a deterministic content hash in its `version`; when canonical skill content changes, the version changes and compatible OpenCode versions refresh their cached copy automatically.

The HTTP catalog is generated from `skills/` on every relevant push to `main`. Never edit the generated catalog as a second source of truth.

OpenCode V1 does not use the V2 HTTP catalog; install through the portable CLI instead.

## Browse the portable catalog

```bash
npx skills add jesusdavidweb/skills --list
```

## Install interactively

```bash
npx skills add jesusdavidweb/skills
```

## Install one skill

```bash
npx skills add jesusdavidweb/skills \
  --skill wordpress-deep-audit
```

## Target a specific agent

```bash
# OpenAI Codex
npx skills add jesusdavidweb/skills \
  --skill repo-audit -a codex

# Claude Code
npx skills add jesusdavidweb/skills \
  --skill repo-audit -a claude-code

# OpenCode
npx skills add jesusdavidweb/skills \
  --skill repo-audit -a opencode
```

Use `-g` to install globally and `-y` for non-interactive installs.

```bash
npx skills add jesusdavidweb/skills \
  --skill repo-audit -g -a codex -y
```

## Install all skills

Install all available skills and let the CLI target supported agents:

```bash
npx skills add jesusdavidweb/skills --all -g
```

Equivalent commands:

```bash
pnpm dlx skills add jesusdavidweb/skills --all -g
bunx skills add jesusdavidweb/skills --all -g
yarn dlx skills add jesusdavidweb/skills --all -g
```

For selected agents only:

```bash
npx skills add jesusdavidweb/skills \
  --skill '*' -a codex -a claude-code -a opencode
```

## Symlink fallback

The CLI normally uses a canonical installation and symlinks skills into agent directories. If the target environment does not handle symlinks correctly, force physical copies:

```bash
npx skills add jesusdavidweb/skills \
  --skill repo-audit -a codex --copy
```

## MiniMax Code

MiniMax can consume Agent Skills through the same portable ecosystem. Because MiniMax Code's client-specific installation path is not treated here as a stable public contract, do not invent or hard-code a `.minimax/skills` directory.

```bash
npx skills add jesusdavidweb/skills -g
```

If the current `skills` CLI exposes a MiniMax-specific target, prefer that target.

## Updating CLI-installed skills

Use the same package runner used for installation:

```bash
# npm
npx skills update

# pnpm
pnpm dlx skills update

# Bun
bunx skills update

# Yarn
yarn dlx skills update
```

List installed skills:

```bash
npx skills list
```

OpenCode V2 HTTP-catalog users do not need this update command for this repository; OpenCode uses catalog versions to refresh cached remote skills.

## Use without installing

```bash
npx skills use jesusdavidweb/skills \
  --skill wordpress-deep-audit
```
