# File Upload Review

Validate authorization, expected content/type, size and filename handling. Store uploads outside executable/application paths where possible and generate server-side storage names. Do not trust `Content-Type` or extension alone. Consider decompression/archive bombs, image/document parser risk, public object access and malware scanning based on threat model.

## Source
- https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html
