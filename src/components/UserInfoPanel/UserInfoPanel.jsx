import React from 'react'
import notification from '../../images/vector/notification-icon.svg'

export const UserInfoPanel = () => {
	return (
		<section className='user-info'>
			<ul className='user-info__nav'>
				<li className='account'>
					<a className='account__link' href='/#'>
						100.00 ₽
					</a>
				</li>
				<li className='notification'>
					<a href='/#' className='notification__link'>
						<img
							src={notification}
							alt='notifications'
							className='notification__link-img'
						/>
						<span className='notification__count'>1</span>
					</a>
				</li>
				<li className='user'>
					<a href='/#' className='user__link'>
						vikavishny
					</a>
				</li>
				<li className='exit'>
					<a href='/#' className='exit__link'>
						Выход
					</a>
				</li>
			</ul>
		</section>
	)
}
