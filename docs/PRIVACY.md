# Privacy and Sensitive Data

This repository is public. Skills, references, scripts, assets, evals, examples, issues and pull requests must not contain private customer data or operational secrets.

## Never commit

- API keys, access tokens, passwords, SMTP credentials, private keys or session secrets.
- Recipient/customer email addresses, phone numbers or message bodies from real incidents.
- Private customer domains, infrastructure IPs, queue IDs, internal hostnames or private support transcripts unless the information is intentionally public and required for a public fixture.
- Absolute local paths that reveal a contributor's local username or workstation layout.
- Production dumps, logs or screenshots containing identifying operational data.

## Generalize incident knowledge

Production incidents may inform a skill, but publish the reusable engineering principle rather than the incident record:

1. extract the diagnostic pattern or operational rule;
2. replace real domains/IPs/identifiers with reserved examples;
3. aggregate or synthesize metrics instead of copying customer numbers;
4. summarize provider behavior without copying private support conversations;
5. review the final diff as if it were immediately indexed by search engines.

Use reserved documentation domains such as `example.com`, `example.net`, `example.org` and `.test`, and documentation IPv4 ranges such as `192.0.2.0/24`, `198.51.100.0/24` and `203.0.113.0/24` when concrete examples are useful.

## Automated audit

Run:

```bash
npm run validate:privacy
```

The scanner blocks common high-confidence secret formats and reports likely personal identifiers such as non-example email addresses, absolute home paths and public IPv4 addresses for manual review.

The scanner is a guardrail, not proof that a repository contains no sensitive information. Human review is still required for names, customer-specific business context and data that does not match a recognizable secret/PII pattern.
