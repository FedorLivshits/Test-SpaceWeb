import React from 'react'
import arrow from '../../images/vector/arrow-icon.svg'

export const ArticlesPanel = () => {
	return (
		<section className='articles'>
			<div className='articles__header'>
				<h2 className='articles__header-subtitle'>Бортовой журнал</h2>
				<h1 className='articles__header-title'>Бортовой журнал</h1>
			</div>
			<ul className='article__items'>
				<li className='article__item'>
					<div className='article__head'>
						<h6 className='article__title'>
							Топ-6 сервисов для проверки кроссбраузерности сайта
						</h6>
						<button className='article__btn'>
							<img className='article__btn-icon' src={arrow} alt='arrow-btn' />
						</button>
					</div>
					<div className='article__content'>
						Хостинг – услуга, в рамках которой вы сможете разместить и
						администрировать ваши сайты в сети. В одной из прошлых статей мы уже
						разобрали отличия платного от бесплатного хостинга, теперь же хотим
						рассказать, как можно сэкономить при выборе платного хостинга.
					</div>
				</li>
			</ul>
		</section>
	)
}
