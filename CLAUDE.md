# CLAUDE.md

## Worktree cleanup

Feature work can run in a git worktree next to the main checkout. Clean up each worktree when its work is done.

- After the PR for a worktree branch is merged, you MUST do these steps in order:
  1. Stop any server that runs from that worktree (for example `jekyll serve`).
  2. Run `git worktree remove <path>`.
  3. Delete the local branch.
  4. Run `git worktree prune`.
- If the branch is not merged, or the worktree has uncommitted changes, you MUST NOT remove it. Report it and ask.
- Never use `--force` on `git worktree remove` without asking first.
