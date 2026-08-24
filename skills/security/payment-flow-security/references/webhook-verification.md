# Payment Webhook Verification

Preserve raw request bytes until signature verification. Prefer official provider libraries/algorithms, reject invalid signatures before business parsing, enforce provider-supported replay windows, and log event ID/type/outcome without sensitive data. Return quickly and process slow effects asynchronously. Never mark paid from query parameters, success pages or client-supplied payment objects.
