#!/usr/bin/env python3
import argparse, hashlib, hmac
p=argparse.ArgumentParser(description='Offline HMAC fixture verifier')
p.add_argument('--algorithm',choices=['sha256','sha1'],default='sha256'); p.add_argument('--secret',required=True); p.add_argument('--signature',required=True); p.add_argument('file')
a=p.parse_args(); data=open(a.file,'rb').read(); digest=hmac.new(a.secret.encode(),data,getattr(hashlib,a.algorithm)).hexdigest(); supplied=a.signature.split('=',1)[-1]
print('valid' if hmac.compare_digest(digest,supplied) else 'invalid'); raise SystemExit(0 if hmac.compare_digest(digest,supplied) else 1)
