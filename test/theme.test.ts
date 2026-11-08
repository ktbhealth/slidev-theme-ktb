import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { ktbFonts, ktbTokens } from '../src/tokens'

const themeCss = readFileSync(
	fileURLToPath(new URL('../styles/theme.css', import.meta.url)),
	'utf-8',
)

const require = createRequire(import.meta.url)
const tokensCssPath = require.resolve('@ktbhealth/ui/tokens.css')
const tokensCss = readFileSync(tokensCssPath, 'utf-8')

describe('slidev-theme-ktb', () => {
	it('maps the KTB primary color to Slidev theme variables', () => {
		expect(themeCss).toContain('--slidev-theme-primary: var(--ktb-primary)')
		expect(tokensCss).toContain('--ktb-primary: oklch(0.62 0.11 259.02)')
		expect(tokensCss).toContain('--ktb-primary: oklch(0.62 0.19 259.76)')
	})

	it('keeps the exact token values from the KTB design system', () => {
		for (const scheme of ['light', 'dark'] as const) {
			for (const [key, value] of Object.entries(ktbTokens[scheme])) {
				const cssVar = `--ktb-${key.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`)}`
				expect(tokensCss, `${scheme} ${cssVar}`).toContain(`${cssVar}: ${value}`)
			}
		}
	})

	it('maps backgrounds, foregrounds and radius for both schemes', () => {
		expect(tokensCss).toContain('--ktb-background: oklch(1 0 0)')
		expect(tokensCss).toContain('--ktb-background: oklch(0.2 0 0)')
		expect(tokensCss).toContain('--ktb-foreground: oklch(0.32 0 0)')
		expect(tokensCss).toContain('--ktb-radius: 0.45rem')
	})

	it('uses the KTB font stacks', () => {
		expect(themeCss).toContain(`--ktb-font-sans: ${ktbFonts.sans}`)
		expect(themeCss).toContain(`--ktb-font-mono: ${ktbFonts.mono}`)
		expect(themeCss).toContain('--slidev-code-font-family: "Geist Mono"')
	})

	it('has no purple gradients or emerald accents', () => {
		expect(themeCss).not.toMatch(/gradient/i)
		expect(themeCss).not.toMatch(/emerald|green/i)
	})
})
