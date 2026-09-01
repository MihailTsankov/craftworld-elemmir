---
name: vcs-add
description: Always apply this skill whenever the agent creates ANY new, non-temporary file inside the project repository (via create_file or any equivalent tool), regardless of the task that triggered the creation (new component, page, config, asset, doc, etc.). Immediately stage the new file with git add after creating it.
---

# VCS Add — Stage New Files After Creation

Whenever you create **any new, non-temporary file** as part of implementing a
feature, fix, or any other task in this project, you **MUST** immediately stage
it with Git so it is tracked by version control. This applies to **every** file
creation, not just tasks that mention Git explicitly — do not wait to be asked.

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
- **Temporary / non-project files**, i.e. anything created outside the
  `C:\projects\craftworld-elemmir` repository working tree — for example files
  under the Copilot CLI session workspace (`~/.copilot/session-state/...`,
  including `plan.md`), scratch files used only to test a command, or files in
  the OS temp directory. These are not part of the project and must never be
  added to VCS.

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

