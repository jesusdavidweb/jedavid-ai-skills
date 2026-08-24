# Test Layers

Use the cheapest test that provides trustworthy evidence. Unit tests fit pure domain logic/parsers/validation; integration tests cover databases, framework/auth/queue/filesystem boundaries; contract tests protect producer/consumer assumptions; E2E should be a small set of high-value full flows. Avoid elaborate mocks that reproduce framework internals. Preserve at least one realistic boundary test for critical dependencies.
