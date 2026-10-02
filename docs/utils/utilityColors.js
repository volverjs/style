/**
 * The colors that have a utility class with the given prefix, as
 * src/utilities/colors.scss emits them: `--color-tint` and the covers have
 * none, and a contrast text or a readable role is a `text-` class alone.
 */
export const utilityColors = (colors, prefix) =>
	Object.fromEntries(
		Object.entries(colors ?? {}).filter(
			([key]) =>
				key !== 'tint' &&
				!key.endsWith('-cover') &&
				(prefix === 'text' ||
					!/-(readable|readable-strong|contrast)$/.test(key)),
		),
	)
