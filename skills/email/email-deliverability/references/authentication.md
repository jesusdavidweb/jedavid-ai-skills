# Sender Authentication

Trace the real mail path before editing DNS. SPF must authorize the actual envelope sender path; DKIM must validate the signature actually emitted; DMARC evaluates alignment between RFC5322.From and a passing SPF or DKIM identity.

PTR should resolve the sending IP to a hostname, and that hostname should resolve forward to the same IP. HELO/EHLO should use a legitimate resolvable identity. Multiple DKIM signatures are acceptable only when each intentional signature has a valid selector and key.

Use TLS for transmission. Do not treat SPF/DKIM/DMARC passing as a guarantee of inbox placement; reputation, consent, rate and content remain separate signals.

## Sources
- RFC 7208 (SPF): https://www.rfc-editor.org/rfc/rfc7208
- RFC 6376 (DKIM): https://www.rfc-editor.org/rfc/rfc6376
- RFC 7489 (DMARC): https://www.rfc-editor.org/rfc/rfc7489
