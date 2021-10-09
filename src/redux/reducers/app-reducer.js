import { requestXMLData } from '../../api/xmlData-api'

const ADD_ARTICLES = 'app-reducer/ADD_ARTICLES'
const TOGGLE_ARTICLE = 'app-reducer/TOGGLE_ARTICLE'

let initialState = {
	articles: null,
	loading: false,
}

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ARTICLES:
			return {
				...state,
				articles: action.articles,
			}
        case TOGGLE_ARTICLE:
            return {
                ...state,
                articles: state.articles.map(a => {
                    if(a.id === action.id){
                        return {...a, isOpen: !a.isOpen}
                    }
                    return a
                })
            }
		default:
			return state
	}
}

export const addArticles = articles => ({ type: ADD_ARTICLES, articles })
export const toggleArticles = id => ({ type: TOGGLE_ARTICLE, id })

export const getArticles = (method, url) => {
	return async dispatch => {
		const generateId = () => {
			return (
				Math.random().toString(32).substring(2, 10) + (+new Date()).toString(32)
			)
		}
		let res = await requestXMLData(method, url)
		let arrForArticles = []
		let articleTitle = res.querySelectorAll('topic')
		let articleContent = res.querySelectorAll('content')
		articleTitle.forEach(t => {
			let objForArticle = {}
			objForArticle.title = t.innerHTML
			arrForArticles.push(objForArticle)
		})
		articleContent.forEach((c, i) => {
			arrForArticles[i].content = c.innerHTML
		})
		arrForArticles = arrForArticles.map(item => {
			return {
				...item,
				isOpen: false,
				id: generateId(),
			}
		})
		dispatch(addArticles(arrForArticles))
	}
}

export default appReducer
