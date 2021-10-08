import React from 'react'
import './scss/style.scss'
import logo from './images/vector/logo.svg'
import user from './images/vector/user-icon.svg'
import domen from './images/vector/domen-icon.svg'
import journal from './images/vector/journal-icon.svg'
import vps from './images/vector/vps-icon.svg'
import notification from './images/vector/notification-icon.svg'

const App = () => {
	return (
		<div className='app'>
			<div className='wrapper'>
				<aside className='sidebar'>
					<div className='sidebar__inner'>
						<a className='sidebar__logo' href='/#'>
							<img className='sidebar__logo-img' src={logo} alt='logo' />
						</a>
						<ul className='sidebar__list-items'>
							<li className='sidebar__list-item'>
								<a className='sidebar__list-link' href='/#'>
									<img
										className='sidebar__list-icon'
										src={user}
										alt='user-icon'
									/>
									Аккаунт
								</a>
							</li>
							<li className='sidebar__list-item'>
								<a className='sidebar__list-link' href='/#'>
									<img
										className='sidebar__list-icon'
										src={vps}
										alt='vps-icon'
									/>
									VPS
								</a>
							</li>
							<li className='sidebar__list-item'>
								<a className='sidebar__list-link' href='/#'>
									<img
										className='sidebar__list-icon'
										src={domen}
										alt='domen-icon'
									/>
									Домены
								</a>
							</li>
							<li className='sidebar__list-item sidebar__list-item--active'>
								<a className='sidebar__list-link' href='/#'>
									<img
										className='sidebar__list-icon'
										src={journal}
										alt='journal-icon'
									/>
									Бортовой журнал
								</a>
							</li>
						</ul>
					</div>
				</aside>
				<div className='content'>
					<section className='content__header'>
						<ul className='content__header-nav'>
							<li className='account'>
								<a href='/#' className='account__link'>
									100.00 ₽
								</a>
							</li>
							<li className='user'>
								<a href='/#' className='notification__link'>
									<img
										src={notification}
										alt='notifications'
										className='notification__link-img'
									/>
									vikavishny
								</a>
							</li>
							<li className='exit'>
								<a href='/#' className='exit__link'>
									{' '}
									Выход{' '}
								</a>
							</li>
						</ul>
					</section>
					<section className='journal'>
						<div className='journal__header'>
							<h2 className='journal__subtitle'>Бортовой журнал</h2>
							<h1 className='journal__title'>Бортовой журнал</h1>
						</div>
						<ul className='article__items'>
							<li className='article__item'>
								<h6 className='article__title'>nvsfuvndv</h6>
								<div className='article__content'></div>
							</li>
						</ul>
					</section>
				</div>
				<footer className='footer'>
					<div className='footer__info'>
						<div className='footer__info-item'>
							© 2001– 2018 ООО <a href='/#'>«СпейсВэб»</a>
						</div>
						<div className='footer__info-item'>Все права защищены.</div>
						<div className='footer__info-item'>
							Лицензия <a href='/#'>№163230</a>
						</div>
					</div>
					<div className='footer__phones'>
						<div className='footer__phone'>
							<a href='tel:+78123341222'>+7 (812) 334-12-22 </a>(в
							Санкт-Петербурге)
						</div>
						<div className='footer__phone'>
							<a href='tel:+74956631612'>+7 (495) 663-16-12</a>
							(в Москве)
						</div>
						<div className='footer__phone'>
							<a href='tel:8001001615'> (800) 100-16-15 </a>
							(бесплатно по России)
						</div>
					</div>
				</footer>
			</div>
		</div>
	)
}

export default App
