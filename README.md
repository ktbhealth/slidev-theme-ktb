# @ktbhealth/slidev-theme-ktb

A [Slidev](https://sli.dev) theme that makes presentations look identical to the
KTB Health product. It reuses the exact design tokens from the
[`ktbhealth/ui`](https://github.com/ktbhealth/ui) design system
(`packages/tailwind/src/globals.css`, shadcn/Base UI theme): colors in
`oklch()`, radius `0.45rem`, and the Geist / Geist Mono font stacks.

Solid blue/violet primary, no purple gradients, no emerald accents.

## Usage

The package is not published to npm yet — install it as a git dependency,
pinned to a tag or commit:

```json
{
	"devDependencies": {
		"@ktbhealth/slidev-theme-ktb": "github:ktbhealth/slidev-theme-ktb#<tag-or-commit>"
	}
}
```

Once published to npm, the registry specifier `npm i @ktbhealth/slidev-theme-ktb`
will work too.

Then set the theme in the frontmatter of `slides.md`. Because the package is
scoped, the full package name is required:

```md
---
theme: '@ktbhealth/slidev-theme-ktb'
---

# Hello KTB
```

Note: Slidev resolves unscoped names like `slidev-theme-ktb` or `ktb` by
prefix search, but scoped packages must always be referenced by their full
package name, so use `@ktbhealth/slidev-theme-ktb` exactly as shown.

### Local development / unpublished use

Point `theme` at the package directory instead of installing it:

```md
---
theme: ./slidev-theme-ktb
---
```

### Dark mode

The theme supports both color schemas (`slidev.colorSchema: "both"`). Slidev
toggles the `dark` class on `<html>`; the theme remaps every token to the
dark-scheme values from `globals.css` automatically. You can also force it:

```md
---
colorSchema: dark
---
```

### Fonts

Geist and Geist Mono are auto-imported from Google Fonts (Slidev default
provider). If you prefer local fonts or another provider, override in your
`slides.md`:

```md
---
fonts:
  sans: Geist
  mono: Geist Mono
  provider: none
  local:
    - Geist
    - Geist Mono
---
```

### Customizing

Every KTB token is exposed as a `--ktb-*` CSS variable on `:root`, and the
Slidev-facing variables (`--slidev-theme-primary`, `--slidev-code-*`, ...) are
derived from them. To tweak a value for one deck, override the variable in your
own `styles/index.css` or `styles.css`, or use `themeConfig` in the frontmatter:

```md
---
themeConfig:
  primary: '#3b5bdb'
---
```

## Token mapping

| KTB token (`globals.css`) | Slidev variable | Notes |
| --- | --- | --- |
| `--primary` | `--slidev-theme-primary` -> `--ktb-primary` | light `oklch(0.62 0.11 259.02)`, dark `oklch(0.62 0.19 259.76)` |
| `--background` | `--ktb-background` -> `bg-main` shortcut | via `setup/unocss.ts` |
| `--foreground` | `--ktb-foreground` -> `text-main` shortcut | via `setup/unocss.ts` |
| `--border` | `--ktb-border` -> `border-main` shortcut | via `setup/unocss.ts` |
| `--muted` | `--slidev-code-background`, `bg-active` | code surface |
| `--muted-foreground` | `--ktb-muted-foreground` | available for custom CSS |
| `--radius` | `--ktb-radius` -> `--slidev-code-radius` | `0.45rem` |
| `--font-geist` | `--ktb-font-sans`, Slidev `fonts.sans` | Geist via Google Fonts |
| `--font-geist-mono` | `--ktb-font-mono`, `--slidev-code-font-family`, `fonts.mono` | Geist Mono |

All other tokens (`card`, `popover`, `secondary`, `accent`, `destructive`,
`ring`, `input`, chart/sidebar scales) are also exposed as `--ktb-*` variables
for custom slide styles.

## Developing this theme

```bash
bun install
bun run test      # vitest: asserts token parity with globals.css
bun run dev       # preview example.md with slidev
```

See `DECISIONS.md` for the ui-vue evaluation and `src/tokens.ts` for the
machine-readable token source.
