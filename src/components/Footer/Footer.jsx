import React from 'react'

export const Footer = () => {
	return (
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
					<a href='tel:+78123341222'>+7 (812) 334-12-22 </a>
					(в Санкт-Петербурге)
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
	)
}
