const ADD_ARTICLES = 'app-reducer/ADD_ARTICLES'

let initialState = {
    articles: null,
    loading: false
}

const appReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_ARTICLES: 
        return {
            ...state,
            articles: action.articles
        }
        default:
            return state
    }
}

export const addArticles = (articles) => ({type: ADD_ARTICLES, articles})

export const getArticles = (method, url) => {
    return async (dispatch) => {
        function requestXMLData(method, url) {
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
      
           let res = await requestXMLData(method, url)
           let arr = []
           let title = res.querySelectorAll('topic')
           let content = res.querySelectorAll('content')
           title.forEach(t => {
               let objForArticle = {}
               objForArticle.title = t.innerHTML
               arr.push(objForArticle)
           })
           content.forEach((c, i) => {
               arr[i].content = c.innerHTML
           })
           dispatch(addArticles(arr))
    }
}


export default appReducer