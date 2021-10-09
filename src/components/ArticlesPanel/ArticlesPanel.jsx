import React, { useEffect } from 'react'
import arrow from '../../images/vector/arrow-icon.svg'
import { useDispatch, useSelector } from 'react-redux'
import { getArticles } from '../../redux/reducers/app-reducer'
import { articlesSelector } from '../../redux/selectors'

export const ArticlesPanel = () => {
	const dispatch = useDispatch()
	const articles = useSelector(articlesSelector)

	useEffect(() => {
		dispatch(getArticles('GET', 'https://sweb.ru/export/turbojournal/'))
	}, [])

	return (
		<section className='articles'>
			<div className='articles__header'>
				<h2 className='articles__header-subtitle'>Бортовой журнал</h2>
				<h1 className='articles__header-title'>Бортовой журнал</h1>
			</div>
			<ul className='article__items'>
				{articles &&
					articles.map(item => {
						return (
							<li className='article__item'>
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
						)
					})}
			</ul>
		</section>
	)
}
