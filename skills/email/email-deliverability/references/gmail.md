# Gmail Sender Requirements

As of 2026, Gmail requires all senders to personal Gmail accounts to use SPF or DKIM, valid forward/reverse DNS, TLS and RFC-compliant messages. Senders at roughly 5,000+ messages/day to personal Gmail accounts are treated as bulk senders and must use SPF + DKIM + DMARC, DMARC alignment, and one-click unsubscribe for marketing/subscribed mail. Google says bulk-sender classification does not expire once assigned.

Google recommends keeping Postmaster Tools spam rate below 0.3%. Enforcement against non-compliant traffic increased from November 2025 and can include temporary/permanent rejection.

Do not apply marketing unsubscribe requirements to purely transactional messages without checking current policy.

## Sources
- https://support.google.com/mail/answer/81126
- https://support.google.com/mail/answer/14229414
