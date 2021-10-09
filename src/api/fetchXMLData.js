export const fetchXMLData = async url => {
	const response = await fetch(url)
	const data = await response.text()
	const parser = new DOMParser()
	return parser.parseFromString(data, 'application/xml')
}
