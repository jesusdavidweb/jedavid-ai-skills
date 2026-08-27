# Mail Delivery Dashboard

## Overview
- Unique outbound messages
- Sent rate
- Deferred rate
- Bounced rate
- Oldest deferred age

## Destination health
- Unique network failures by MX/provider
- SMTP 4xx by MX/provider
- SMTP 5xx by MX/provider
- Retry attempts per unique message

## Routing
- Direct volume / success rate
- Relay volume / success rate
- Unexpected route changes

## Privacy defaults
Aggregate shared dashboards by provider/MX where possible. Hash or omit recipient addresses. Never ingest message bodies, credentials or private support transcripts.
