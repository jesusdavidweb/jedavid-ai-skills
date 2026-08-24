#!/usr/bin/env python3
import sys, urllib.request
url=sys.argv[1] if len(sys.argv)>1 else None
if not url: raise SystemExit('usage: inspect-security-headers.py https://example.com')
req=urllib.request.Request(url, method='GET', headers={'User-Agent':'jedavid-ai-skills/security-header-audit'})
with urllib.request.urlopen(req, timeout=10) as r:
    wanted=['content-security-policy','strict-transport-security','x-content-type-options','referrer-policy','permissions-policy','cross-origin-opener-policy','cross-origin-resource-policy','set-cookie']
    print('status:',r.status); print('final-url:',r.geturl())
    for h in wanted:
        vals=r.headers.get_all(h) or []
        print(f'{h}:', ' | '.join(vals) if vals else '<missing>')
