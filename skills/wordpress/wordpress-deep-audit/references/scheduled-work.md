# Scheduled Work: WP-Cron and Action Scheduler

Separate WP-Cron events from Action Scheduler queues. Measure overdue actions, failure counts, oldest pending time and recurring producers. A backlog is a symptom: identify whether the cause is traffic-dependent WP-Cron, disabled cron, worker exhaustion, external API failure, plugin bugs, or database contention.

Do not bulk-cancel failed/pending actions before identifying whether they represent business operations such as subscriptions, email, order synchronization or webhooks.

## Sources
- WP-Cron: https://developer.wordpress.org/plugins/cron/
- Action Scheduler: https://actionscheduler.org/
