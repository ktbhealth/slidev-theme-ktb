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
		// preset-mini cannot apply `/opacity` modifiers to plain `var()`
		// colors: colorToString only substitutes the `%alpha` placeholder.
		// Wrapping each token in color-mix lets `bg-primary/5`,
		// `ring-foreground/10`, `border-primary/30`, etc. resolve correctly.
		colors: Object.fromEntries(
			[
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
				'destructive-foreground',
				'border',
				'input',
				'ring',
			].map((name) => [
				name,
				`color-mix(in oklab, var(--ktb-${name}) calc(%alpha * 100%), transparent)`,
			]),
		),
	},
	shortcuts: {
		'bg-main': 'bg-[var(--ktb-background)]',
		'text-main': 'text-[var(--ktb-foreground)]',
		'border-main': 'border-[var(--ktb-border)]',
		'bg-active': 'bg-[var(--ktb-muted)]',
	},
}))
