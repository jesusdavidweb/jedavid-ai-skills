---
name: backup-disaster-recovery
description: Use when designing, auditing, or testing backups and disaster recovery for VPSs, Docker volumes, databases, WordPress, mail infrastructure, object storage, or Cloudflare-hosted systems.
---
# Backup and Disaster Recovery
## Workflow
1. Inventory stateful assets and classify business criticality.
2. Define RPO and RTO per asset; choose backup frequency/retention accordingly.
3. Keep at least one backup copy outside the failure domain of the primary system.
4. Encrypt sensitive backups and restrict restoration access.
5. Back up configuration, secrets metadata, databases, persistent volumes and required application artifacts deliberately rather than imaging blindly.
6. Automate integrity checks and alert on failed/stale backups.
7. Perform restoration drills into isolated environments and measure actual restore time.
8. Document dependencies and restoration order.
## Guardrails
A backup is not considered valid until restoration has been tested.