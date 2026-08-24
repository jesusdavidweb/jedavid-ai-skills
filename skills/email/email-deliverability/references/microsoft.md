# Microsoft Consumer Sender Requirements

Microsoft consumer services apply stricter requirements to high-volume senders. For domains sending about 5,000+ messages/day to Microsoft consumer mailboxes, current guidance requires SPF and DKIM to pass, a DMARC record, and DMARC validation/alignment.

Treat Microsoft NDR codes as evidence: preserve the complete rejection, sending IP, envelope sender and message identity before changing authentication or rate settings.

## Sources
- https://support.microsoft.com/en-us/outlook/fix-ndr-error-550-5-7-515-in-outlook-com
- https://techcommunity.microsoft.com/blog/microsoftdefenderforoffice365blog/strengthening-email-ecosystem-outlooks-new-requirements-for-high-volume-senders/4399730
