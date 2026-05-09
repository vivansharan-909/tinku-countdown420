# AGENTS.md

This file gives AI coding agents a shared operating guide for this repository.

## Project status

This repository is currently a greenfield workspace with no source files committed yet.

Until the project structure exists, optimize for:

- keeping the repo easy to bootstrap
- making small, reviewable changes
- documenting assumptions in PRs or handoff notes
- avoiding unnecessary framework or tooling churn

## Primary goals

When contributing here, agents should help us:

- build a clean, maintainable web project
- preserve a simple developer experience
- prefer clarity over cleverness
- leave the repo in a better state than they found it

## Working style

- Inspect the repository before making assumptions.
- Match existing patterns once the codebase has structure.
- If the repo is still sparse, choose mainstream, low-friction defaults.
- Keep changes scoped to the task instead of broad refactors.
- Call out tradeoffs when a decision could affect future architecture.

## File creation rules

- Create only the files needed for the task.
- Prefer conventional filenames and layout for the chosen stack.
- Add brief documentation when introducing non-obvious setup.
- Do not add large generated artifacts unless the user asks for them.

## Coding conventions

Until repo-specific conventions exist, use these defaults:

- favor readability over abstraction
- keep functions and components focused
- use descriptive names
- add comments only where intent is not obvious from the code
- avoid dead code, placeholder branches, and commented-out implementations

## Dependencies

- Prefer the smallest dependency surface that solves the problem well.
- Avoid adding libraries for tasks that the platform or existing tooling can already handle.
- When adding a dependency, mention why it was needed.
- Prefer actively maintained, widely adopted packages.

## Git hygiene

- Do not overwrite or revert user changes you did not make.
- Keep diffs narrow and easy to review.
- Group related edits together.
- If the workspace contains unrelated changes, ignore them unless they block the task.

## Validation

Before wrapping up work, agents should do the best available validation for the current repo state:

- run relevant tests if they exist
- run linting or type checks if configured
- sanity-check new files for obvious inconsistencies
- if no validation tooling exists yet, say so clearly

## Communication

- State assumptions when the repository does not provide enough context.
- Summarize what changed and any follow-up work the user may want.
- Be concise, but include enough detail for a smooth handoff.
- Flag blockers early when missing context could cause expensive rework.

## Early-project recommendations

If asked to scaffold the project later, prefer discussing or inferring:

- framework choice
- package manager
- styling approach
- deployment target
- testing strategy
- linting and formatting setup

Until those are chosen, avoid baking in strong opinions unless the user requests them.
