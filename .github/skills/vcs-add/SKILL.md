---
name: vcs-add
description: A skill that instructs the agent to stage newly created project files with git add after creating them.
---

# VCS Add — Stage New Files After Creation

Whenever you create **any new file** as part of implementing a feature, fix, or
any other task in this project, you **MUST** immediately stage it with Git so it
is tracked by version control.

## Rule

> After every `create_file` (or equivalent) tool call that produces a new file
> in the workspace, run the following command in the terminal before moving on
> to the next step:
>
> ```powershell
> git -C "C:\Projects\craftworld-elemmir" add "<relative-path-to-new-file>"
> ```
>
> Use the **relative path** from the project root (e.g. `src/pages/AutarchChamberPage.tsx`).

## When This Applies

- Any new `.tsx`, `.ts`, `.css`, `.md`, `.json`, `.svg`, `.png`, or other file
  you create under the project root.
- Files placed in **any** subdirectory (`src/`, `src/pages/`, `src/components/`,
  `public/`, `.github/`, etc.).
- Skill files themselves (files under `.github/skills/`).

## When This Does NOT Apply

- Edits to **existing** files — `git add` is only needed for brand-new files
  that are currently untracked.
- Files explicitly excluded by `.gitignore` (e.g. `node_modules/`, `dist/`).

## Implementation Recipe

1. Create the new file with the appropriate tool.
2. Immediately run:
   ```powershell
   git -C "C:\Projects\craftworld-elemmir" add "<relative-path>"
   ```
3. Optionally verify with:
   ```powershell
   git -C "C:\Projects\craftworld-elemmir" status --short
   ```
   to confirm the file now shows as staged (`A  <path>`).
4. Continue with the rest of the task.

If multiple new files are created in one task, you may batch them into a single
`git add` call:

```powershell
git -C "C:\Projects\craftworld-elemmir" add src/pages/FooPage.tsx src/components/FooBar.tsx
```

## Acceptance Checklist

- [ ] Every newly created file is staged with `git add` immediately after creation.
- [ ] `git status --short` shows the new file(s) as `A  <path>` (staged), not `?? <path>` (untracked).
- [ ] No existing tracked files were accidentally staged or unstaged.

