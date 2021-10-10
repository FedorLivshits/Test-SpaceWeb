import React, { useEffect } from 'react'
import arrow from '../../images/vector/arrow-icon.svg'
import { useDispatch, useSelector } from 'react-redux'
import { getArticles } from '../../redux/reducers/app-reducer'
import { articlesSelector } from '../../redux/helpers/selectors'
import { toggleArticles } from '../../redux/reducers/app-reducer'

const ArticlesPanelHeader = () => {
	return (
		<div className='articles__header'>
			<h2 className='articles__header-subtitle'>Бортовой журнал</h2>
			<h1 className='articles__header-title'>Бортовой журнал</h1>
		</div>
	)
}

export const ArticlesPanel = () => {
	const dispatch = useDispatch()
	const articles = useSelector(articlesSelector)

	useEffect(() => {
		dispatch(getArticles('https://sweb.ru/export/turbojournal/'))
	}, [])

	const onArticleClick = id => {
		dispatch(toggleArticles(id))
	}
	if (!articles) {
		return (
			<section className='articles'>
				<ArticlesPanelHeader />
				<div className='articles__loading'>Загрузка...</div>
			</section>
		)
	}

	return (
		<section className='articles'>
			<ArticlesPanelHeader />
			<ul className='article__items'>
				{articles &&
					articles.map(item => {
						return (
							<>
								{item.isOpen ? (
									<li
										className='article__item article__item--active'
										key={item.id}>
										<div
											dangerouslySetInnerHTML={{ __html: item.content }}
											className='article__content article__content--active'></div>
										<button
											className='article__btn article__btn--active'
											onClick={() => onArticleClick(item.id)}>
											<img
												className='article__btn-icon article__btn-icon--active'
												src={arrow}
												alt='arrow-btn'
											/>
										</button>
									</li>
								) : (
									<li
										className='article__item'
										key={item.id}
										onClick={() => onArticleClick(item.id)}>
										<div className='article__head'>
											<h6 className='article__title'>{item.title}</h6>
											<button className='article__btn'>
												<img
													className='article__btn-icon'
													src={arrow}
													alt='arrow-btn'
												/>
											</button>
										</div>
										<div
											dangerouslySetInnerHTML={{ __html: item.content }}
											className='article__content'></div>
									</li>
								)}
							</>
						)
					})}
			</ul>
		</section>
	)
}
