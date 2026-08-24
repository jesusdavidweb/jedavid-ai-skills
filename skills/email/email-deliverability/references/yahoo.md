# Yahoo Sender Requirements

Yahoo requires all senders to authenticate with SPF or DKIM, keep complaint rates below 0.3%, maintain valid forward/reverse DNS, and comply with RFC 5321/5322.

For senders Yahoo classifies as bulk, current requirements include SPF **and** DKIM, a DMARC policy of at least `p=none` with DMARC passing/aligned, and easy unsubscribe for marketing/subscribed mail. Yahoo recommends RFC 8058 one-click unsubscribe and requires unsubscribe requests to be honored within 2 days.

Do not reuse Gmail's 5,000/day threshold for Yahoo. Yahoo's current FAQ explicitly says it does not publish a numeric bulk-sender threshold and evaluates significant volume using authenticated/From-domain and other signals.

Yahoo evaluates multiple DKIM signatures; if multiple DMARC-aligned signatures exist and not all pass, Yahoo does not guarantee DMARC will pass. This matters when diagnosing accidental duplicate signing.

## Sources
- https://senders.yahooinc.com/best-practices/
- https://senders.yahooinc.com/faqs/
- https://senders.yahooinc.com/smtp-error-codes/
