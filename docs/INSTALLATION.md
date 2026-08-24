# Installation

JeDavid AI Skills follows the portable Agent Skills `SKILL.md` convention and is designed to be installed with the open `skills` CLI.

## Browse the catalog

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

# OpenCode
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

MiniMax officially uses the same `npx skills add` ecosystem for Agent Skills. Because MiniMax Code's client-specific installation path is not currently documented as a stable public contract, do not invent or hard-code a `.minimax/skills` directory.

Use the generic installer:

```bash
npx skills add jesusdavidweb/jedavid-ai-skills -g
```

If the current `skills` CLI exposes a MiniMax-specific target, prefer that target. Otherwise use a compatible Agent Skills destination supported by the current MiniMax Code/OpenCode-based harness.

## Updating

```bash
npx skills update
```

List installed skills:

```bash
npx skills list
```

## Use without installing

The open skills CLI can also resolve a skill temporarily:

```bash
npx skills use jesusdavidweb/jedavid-ai-skills \
  --skill wordpress-deep-audit
```
