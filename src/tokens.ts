import { tokensDark, tokensLight } from '@ktbhealth/ui/tokens'

/**
 * KTB Health design tokens, reshaped from @ktbhealth/ui/tokens
 * (generated from ktbhealth/ui packages/tailwind/src/globals.css).
 * Values are the single source of truth in the ui repo; this file only
 * adapts the flat kebab-case maps to the camelCase theme API.
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

const CORE_KEYS = [
	'background',
	'foreground',
	'card',
	'card-foreground',
	'popover',
	'popover-foreground',
	'primary',
	'primary-foreground',
	'secondary',
	'secondary-foreground',
	'muted',
	'muted-foreground',
	'accent',
	'accent-foreground',
	'destructive',
	'border',
	'input',
	'ring',
	'radius',
] as const

const camel = (key: string) =>
	key.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase())

function pick(
	source: Record<string, string>,
	fallback: Record<string, string>,
): Record<string, string> {
	return Object.fromEntries(
		CORE_KEYS.map((k) => [camel(k), source[k] ?? fallback[k]]),
	)
}

export const ktbTokens: {
	light: KtbColorTokens
	dark: KtbColorTokens
} = {
	light: pick(tokensLight, tokensLight) as unknown as KtbColorTokens,
	dark: pick(tokensDark, tokensLight) as unknown as KtbColorTokens,
}

export const ktbFonts = {
	sans: '"Geist", ui-sans-serif, system-ui, -apple-system, sans-serif',
	mono: '"Geist Mono", ui-monospace, SFMono-Regular, Menlo, monospace',
} as const
