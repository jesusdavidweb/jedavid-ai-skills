#!/usr/bin/env python3
"""Read-only Postfix log summary. Emits aggregate outcomes without recipient addresses."""
from __future__ import annotations
import argparse, re
from collections import Counter, defaultdict

QID = re.compile(r"postfix/[^:]+\[\d+\]: ([A-F0-9]{5,}):")
STATUS = re.compile(r"status=(sent|deferred|bounced)")
RELAY = re.compile(r"relay=([^\s,]+)")

def main() -> None:
    p = argparse.ArgumentParser()
    p.add_argument("log")
    args = p.parse_args()
    outcomes: dict[str, str] = {}
    attempts = Counter()
    mx_failures = defaultdict(Counter)
    with open(args.log, "r", errors="replace") as fh:
        for line in fh:
            q = QID.search(line)
            if not q: continue
            qid = q.group(1)
            s = STATUS.search(line)
            if s:
                status = s.group(1)
                attempts[status] += 1
                outcomes[qid] = status
            if "Connection timed out" in line or "Connection refused" in line:
                r = RELAY.search(line)
                mx = r.group(1) if r else "unknown"
                kind = "timeout" if "timed out" in line else "refused"
                mx_failures[mx][kind] += 1
    final = Counter(outcomes.values())
    print(f"unique_queue_ids={len(outcomes)}")
    for k in ("sent", "deferred", "bounced"):
        print(f"final_{k}={final[k]} attempts_{k}={attempts[k]}")
    print("network_failures_by_relay:")
    for mx, counts in sorted(mx_failures.items(), key=lambda x: -sum(x[1].values())):
        print(f"  {mx}: timeout={counts['timeout']} refused={counts['refused']}")

if __name__ == "__main__": main()
