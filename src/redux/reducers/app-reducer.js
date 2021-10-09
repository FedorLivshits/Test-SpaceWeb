import { fetchXMLData } from '../../api/fetchXMLData'
import { generateId } from '../helpers/idGenerator'

const ADD_ARTICLES = 'app-reducer/ADD_ARTICLES'
const TOGGLE_ARTICLE = 'app-reducer/TOGGLE_ARTICLE'

let initialState = {
	articles: null,
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
					if (a.id === action.id) {
						return { ...a, isOpen: !a.isOpen }
					}
					return a
				}),
			}
		default:
			return state
	}
}

export const addArticles = articles => ({ type: ADD_ARTICLES, articles })
export const toggleArticles = id => ({ type: TOGGLE_ARTICLE, id })

export const getArticles = url => {
	return async dispatch => {
		const res = await fetchXMLData(url)
		let arrForArticles = []
		let articleTitle = res.querySelectorAll('topic')
		let articleContent = res.querySelectorAll('content')
		articleTitle.forEach(t => {
			let objForArticle = {}
			objForArticle.title = t.innerHTML
			arrForArticles.push(objForArticle)
		})
		articleContent.forEach((c, i) => {
			let text = c.innerHTML.replace(/]]>/gi, '')
			arrForArticles[i].content = text
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
