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
 * text-primary / bg-primary / border-primary already resolve through
 * --slidev-theme-primary, which the theme CSS maps to --ktb-primary.
 */
export default defineUnoSetup(() => ({
	shortcuts: {
		'bg-main': 'bg-[var(--ktb-background)]',
		'text-main': 'text-[var(--ktb-foreground)]',
		'border-main': 'border-[var(--ktb-border)]',
		'bg-active': 'bg-[var(--ktb-muted)]',
	},
}))
