import icssExports from '../../src/export.scss?export'

const icssExportsString = Object.keys(icssExports).reduce(
	(accumulator, key) => {
		const splittedKey = key.split('__').map((key) => key.replace(/_/g, '/'))
		const value = icssExports[key].replaceAll('"', '')

		let current = accumulator
		splittedKey.forEach((subKey, index) => {
			if (index < splittedKey.length - 1) {
				if (index == 0) {
					accumulator[subKey] = accumulator[subKey] || {}
					current = accumulator[subKey]
					return
				}
				current[subKey] = current[subKey] || {}
				current = current[subKey]
				return
			}
			current[subKey] = value
		})
		return accumulator
	},
	{},
)

export default icssExportsString
