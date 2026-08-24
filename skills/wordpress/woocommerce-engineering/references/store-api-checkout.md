# Store API and Checkout

The Store API (`wc/store/v1`) is customer-facing and differs from the authenticated WC REST API. Cart/checkout is tied to the current customer session. Mutating cart and checkout routes require a Nonce Token or Cart Token as documented. Do not expose administrative or arbitrary-customer data through Store API. Checkout Blocks extensions should use supported extensibility interfaces rather than DOM patching.

## Sources
- https://developer.woocommerce.com/docs/apis/store-api/
- https://developer.woocommerce.com/docs/apis/store-api/resources-endpoints/checkout
- https://developer.woocommerce.com/docs/apis/store-api/nonce-tokens
