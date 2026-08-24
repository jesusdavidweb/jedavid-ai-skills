# Cache Debugging

Capture URL/method, cookies/auth context, status, `Age`, `Cache-Control`, `ETag`, `Vary`, CDN cache-status headers and redirects. Test browser → CDN → proxy/page cache → application/object cache one layer at a time. A global purge hides evidence; prefer one URL/key purge or bypass, then verify the following request's HIT/revalidation behavior.
