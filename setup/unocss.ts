import { defineUnoSetup } from '@slidev/types'

/**
 * Remap Slidev's semantic color shortcuts onto the KTB tokens.
 *
 * Slidev's built-in shortcuts resolve to hardcoded colors:
 *   bg-main    -> bg-white / dark:bg-[#121212]
 *   text-main  -> text-[#181818] / dark:text-[#ddd]
 *   border-main-> border-gray/20
 *
 * KTB Health uses a white light background and a neutral oklch dark
 * background (oklch(0.2 0 0)), so we point the shortcuts at the --ktb-*
 * variables defined in styles/theme.css. The variables themselves switch
 * between light and dark via the `dark` class on <html>.
 *
 * The `theme.colors` block maps every shadcn semantic token onto the same
 * --ktb-* variables so components from @ktbhealth/ui-vue (bg-secondary,
 * text-card-foreground, ring-ring, border-border, ...) resolve correctly
 * under UnoCSS.
 */
export default defineUnoSetup(() => ({
	theme: {
		// Tailwind v4 radius step the ui-vue Badge uses for pills.
		// UnoCSS stops at 3xl; 4xl is 2rem.
		borderRadius: {
			'4xl': '2rem',
		},
		colors: {
			background: 'var(--ktb-background)',
			foreground: 'var(--ktb-foreground)',
			card: 'var(--ktb-card)',
			'card-foreground': 'var(--ktb-card-foreground)',
			popover: 'var(--ktb-popover)',
			'popover-foreground': 'var(--ktb-popover-foreground)',
			primary: 'var(--ktb-primary)',
			'primary-foreground': 'var(--ktb-primary-foreground)',
			secondary: 'var(--ktb-secondary)',
			'secondary-foreground': 'var(--ktb-secondary-foreground)',
			muted: 'var(--ktb-muted)',
			'muted-foreground': 'var(--ktb-muted-foreground)',
			accent: 'var(--ktb-accent)',
			'accent-foreground': 'var(--ktb-accent-foreground)',
			destructive: 'var(--ktb-destructive)',
			'destructive-foreground': 'var(--ktb-primary-foreground)',
			border: 'var(--ktb-border)',
			input: 'var(--ktb-input)',
			ring: 'var(--ktb-ring)',
		},
	},
	shortcuts: {
		'bg-main': 'bg-[var(--ktb-background)]',
		'text-main': 'text-[var(--ktb-foreground)]',
		'border-main': 'border-[var(--ktb-border)]',
		'bg-active': 'bg-[var(--ktb-muted)]',
	},
}))
