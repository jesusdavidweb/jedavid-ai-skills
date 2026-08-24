# WordPress Hardening

Keep core/themes/plugins patched; remove unused executable code after confirming it is unnecessary. Use least privilege for ownership and credentials without blindly removing schema privileges required by updates. Typical permissions are commonly 0644 files/0755 directories, but topology and ownership matter more than copying modes blindly. Block public access to backups, archives, logs and configuration artifacts; restrict execution in user-writable paths where compatible.

## Sources
- https://developer.wordpress.org/advanced-administration/security/hardening/
