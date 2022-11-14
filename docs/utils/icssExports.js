import icssExports from '../../src/export.scss?export'

export default Object.keys(icssExports).reduce((accumulator, key) => {
	const splittedKey = key.split('__')
	const value = icssExports[key].replaceAll('"', '')

	let current = accumulator
	splittedKey.forEach((subKey, index) => {
		if (index < splittedKey.length - 1) {
			accumulator[subKey] = accumulator[subKey] || {}
			current = accumulator[subKey]
		} else {
			current[subKey] = value
		}
	})

	return accumulator
}, {})
