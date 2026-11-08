/**
 * KTB Health design tokens, mirrored from
 * ktbhealth/packages/ui/src/styles/globals.css (shadcn/Base UI theme).
 *
 * These values are the single source of truth for the theme. Keep them in
 * sync with globals.css when the product design system changes.
 * All colors are oklch(), matching the product exactly.
 */

export interface KtbColorTokens {
	background: string
	foreground: string
	card: string
	cardForeground: string
	popover: string
	popoverForeground: string
	primary: string
	primaryForeground: string
	secondary: string
	secondaryForeground: string
	muted: string
	mutedForeground: string
	accent: string
	accentForeground: string
	destructive: string
	border: string
	input: string
	ring: string
	radius: string
}

export const ktbTokens = {
	light: {
		background: 'oklch(1 0 0)',
		foreground: 'oklch(0.32 0 0)',
		card: 'oklch(1 0 0)',
		cardForeground: 'oklch(0.32 0 0)',
		popover: 'oklch(1 0 0)',
		popoverForeground: 'oklch(0.32 0 0)',
		primary: 'oklch(0.62 0.11 259.02)',
		primaryForeground: 'oklch(1 0 0)',
		secondary: 'oklch(0.97 0 0)',
		secondaryForeground: 'oklch(0.45 0.03 257.68)',
		muted: 'oklch(0.98 0 0)',
		mutedForeground: 'oklch(0.55 0.02 264.41)',
		accent: 'oklch(0.95 0.03 233.56)',
		accentForeground: 'oklch(0.38 0.14 265.59)',
		destructive: 'oklch(0.64 0.21 25.39)',
		border: 'oklch(0.93 0.01 261.82)',
		input: 'oklch(0.93 0.01 261.82)',
		ring: 'oklch(0.62 0.11 259.02)',
		radius: '0.45rem',
	},
	dark: {
		background: 'oklch(0.2 0 0)',
		foreground: 'oklch(0.92 0 0)',
		card: 'oklch(0.27 0 0)',
		cardForeground: 'oklch(0.92 0 0)',
		popover: 'oklch(0.27 0 0)',
		popoverForeground: 'oklch(0.92 0 0)',
		primary: 'oklch(0.62 0.19 259.76)',
		primaryForeground: 'oklch(1 0 0)',
		secondary: 'oklch(0.27 0 0)',
		secondaryForeground: 'oklch(0.92 0 0)',
		muted: 'oklch(0.27 0 0)',
		mutedForeground: 'oklch(0.72 0 0)',
		accent: 'oklch(0.38 0.14 265.59)',
		accentForeground: 'oklch(0.88 0.06 254.63)',
		destructive: 'oklch(0.64 0.21 25.39)',
		border: 'oklch(0.37 0 0)',
		input: 'oklch(0.37 0 0)',
		ring: 'oklch(0.62 0.19 259.76)',
		radius: '0.45rem',
	},
} as const satisfies Record<'light' | 'dark', KtbColorTokens>

/** Font stacks, matching --font-geist / --font-geist-mono in globals.css. */
export const ktbFonts = {
	sans: '"Geist", ui-sans-serif, system-ui, -apple-system, sans-serif',
	mono: '"Geist Mono", ui-monospace, SFMono-Regular, Menlo, monospace',
} as const
