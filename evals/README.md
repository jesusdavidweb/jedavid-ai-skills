# Skill Evaluations

Evaluation files describe discovery and routing expectations for reusable Agent Skills.

Each JSON file contains cases with:

- `prompt`: representative user intent;
- `shouldActivate`: whether the skill should be selected;
- `alsoConsider`: other skills that may legitimately compose with it;
- `expectations`: safety, routing, or evidence behaviors expected after activation.

These are model-agnostic fixtures. They are intended for regression testing of descriptions and skill boundaries, not exact-response snapshots.
