export const requestXMLData = (method, url) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url, true)
        xhr.responseType = 'document'
        xhr.overrideMimeType('text/xml')

        xhr.onload = function () {
            if (xhr.readyState === xhr.DONE) {
                if (xhr.status === 200) {
                    resolve(xhr.responseXML)
                } else {
                    reject()
                }
            }
        }
        xhr.send(null)
    })
}