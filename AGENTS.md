# slidev-theme-ktb — agent guide

Slidev theme for KTB Health talks: same tokens/colors/fonts as the
product. Consumed by `presentation-draft` via
`github:ktbhealth/slidev-theme-ktb` (git dep, pinned commit/tag).

## Commands

- `bun run test` — vitest (theme/style tests — run after token changes)
- `bun run dev` — renders `example.md` (:3030)
- `bun run build` / `bun run export`

## Rules

- Single source of truth for deck styling — fixes belong here, not in
  `presentation-draft/slides.md` or its `node_modules`.
- After changes: commit, tag if consumers pin tags, and tell
  presentation-draft to bump the dep.
- Semantic color tokens must keep working with UnoCSS `/opacity`
  modifiers — colors are wrapped in `color-mix(... %alpha ...)` in
  `setup/unocss.ts`; don't revert to plain `var(--ktb-*)` strings
  (breaks `ring-*/10` etc. — see commit history).
