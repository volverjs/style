export const permalinkToPath = (permalink) => {
	const [anchor, label] = permalink.split('</a>')
	return {
		hash: '#' + /href="(.*?)"/g.exec(anchor)[1].split('#')[1],
		label: label.trim(),
	}
}
