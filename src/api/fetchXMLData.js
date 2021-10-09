export const fetchXMLData = async url => {
	try {
		const response = await fetch(url)
		const data = await response.text()
		const parser = new DOMParser()
		return parser.parseFromString(data, 'application/xml')
	} catch (error) {
		console.error(`Ошибка ${error}`)
	}
}
