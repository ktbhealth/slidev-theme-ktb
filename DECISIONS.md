# Decisions

## ui-vue / shadcn-vue component layer: recommend deferring

**Decision: ship (a) a plain CSS-variable Slidev theme now. Revisit (b) a
`ui-vue` component layer only if concrete component needs appear.**

### Context

Slidev decks are Vue applications. The user floated the idea of creating a
`ui-vue` repo that ports the KTB shadcn/Base UI component library to Vue
(shadcn-vue style) so slide components could reuse product components.

### Why not now

1. **A Slidev theme is mostly CSS, not components.** The theme contract is
   `styles/index.{ts,css}`, `layouts/*.vue`, `components/*.vue`, and
   `setup/*.ts`. Our requirements (colors, radius, fonts, dark mode) are fully
   expressed through CSS variables plus one UnoCSS shortcut remap
   (`setup/unocss.ts`). No Vue components are needed for v1.

2. **Toolchain mismatch.** `@ktbhealth/ui` is React + Base UI + Tailwind.
   Porting to shadcn-vue means a second component library to maintain, with
   Tailwind config duplicating tokens that this theme already carries as CSS
   variables. Slidev uses UnoCSS (Tailwind-compatible utilities), so utility
   classes mostly port, but every component would still need Vue rewrites,
   Base UI Vue equivalents ( reka-ui / vueuc), and its own release cycle.

3. **Low reuse value for presentations.** Product components (data tables,
   forms, charts wired to app state) rarely map 1:1 onto slides. The things
   that do recur in decks (cards, stat blocks, tags, comparison grids) are
   cheap to write as theme `components/*.vue` directly against `--ktb-*`
   variables, with zero extra dependencies.

4. **Dependency weight.** Keeping the theme dependency-free (only
   `@slidev/types` for the setup helper types) means it installs and builds
   inside any Slidev version >= 0.49 without dragging a component runtime.

### When to revisit

Create `ui-vue` later if one of these becomes true:

- Decks need interactive components that must stay pixel-identical to the
  product (e.g. embedded live forms, complex charts).
- Multiple Slidev decks/projects need a shared Vue component kit beyond what
  `components/*.vue` in this theme covers.
- The product itself adopts Vue somewhere and `ui-vue` gets a second consumer.

If that happens, the theme can absorb `ui-vue` components incrementally:
`ui-vue` publishes framework-agnostic tokens (already mirrored in
`src/tokens.ts`) and Vue SFCs; this theme would re-export or wrap them under
`components/`. The CSS-variable layer built now is the stable foundation
either way.

## Toolchain: vitest, not vite-plus

The KTB monorepo uses `vite-plus` (`vp`) via the root `vite.config.ts`. That
setup is repo-specific (workspace `projects`, custom `ktb-arch` lint plugin,
coverage thresholds). This package is a standalone Slidev theme consumed by
Slidev's own Vite pipeline, so `vp` adds nothing: there is no app to build or
dev-server to run. Standard `vitest` + `typescript` is used instead, with Bun
as the package manager (`packageManager: bun`, `bun install`).
