# Tool Safety

Expose narrow capabilities rather than generic admin/shell/network tools. Separate reads from writes, authorize against authenticated context rather than model claims, scope credentials, validate structured arguments, treat returned tool data as untrusted and require stronger confirmation/policy for destructive, financial, external-message or privilege-changing actions. A model asserting an action is safe is not authorization.
