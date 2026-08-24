# WordPress Deep Audit Reference Checklist

Use this file as supporting detail after loading the parent skill. Do not treat every item as mandatory when the audit scope is narrower.

## Application
- Core, plugin, theme and PHP versions
- Active, must-use and drop-in components
- Environment constants without exposing values
- REST, cron, loopback and Site Health failures

## Database
- Database size and largest tables
- Autoloaded option size and top contributors
- Action Scheduler backlog/failures
- Plugin log tables and abnormal growth rates
- Orphaned data only after ownership is proven

## Runtime
- Effective Nginx/Apache configuration
- PHP-FPM pools, limits and worker pressure
- Object/page/CDN cache layers and exclusions
- Disk, inode, memory and swap pressure

## Security
- Exposed archives, backups, logs and configuration
- Writable executable paths
- File ownership and permissions
- Unexpected admin users or persistence mechanisms

## Verification
Prioritize reproducible commands, before/after measurements and rollback-safe recommendations.
