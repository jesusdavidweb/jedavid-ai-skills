# Security Policy

## Reporting a vulnerability

Please do not disclose vulnerabilities involving private infrastructure, credentials, authentication bypasses, customer information, or other sensitive data in a public GitHub issue.

For sensitive reports, contact the repository maintainer privately through the contact information available on the maintainer's GitHub profile.

Include enough information to reproduce and understand the issue without including real credentials or unnecessary sensitive data.

## Scope

Security reports may include issues in:

- skill instructions that could encourage unsafe production operations;
- prompt-injection or trust-boundary weaknesses in agent workflows;
- examples that accidentally expose or mishandle secrets;
- instructions that could cause unintended destructive actions;
- insecure authentication, authorization, webhook, payment, or infrastructure guidance.

## Security principles

Skills in this repository should:

- prefer read-only discovery before mutation;
- apply least privilege;
- preserve rollback paths for production changes;
- never require secrets to be committed or printed;
- treat external content and tool output as untrusted;
- distinguish retrieved data from trusted instructions;
- require objective verification after security-sensitive changes.

## Supported versions

The `main` branch represents the currently maintained version of the skills library. Security improvements are applied there rather than maintained across historical branches.
