import React from 'react'
import notification from '../../images/vector/notification-icon.svg'
import { NavLink } from 'react-router-dom'

export const UserInfoPanel = () => {
	return (
		<section className='user-info'>
			<ul className='user-info__nav'>
				<li className='account'>
					<NavLink className='account__link' exact to='/account'>
						100.00 ₽
					</NavLink>
				</li>
				<li className='notification'>
					<NavLink exact to='/notification' className='notification__link'>
						<img
							src={notification}
							alt='notifications'
							className='notification__link-img'
						/>
						<span className='notification__count'>1</span>
					</NavLink>
				</li>
				<li className='user'>
					<NavLink exact to='/user' className='user__link'>
						vikavishny
					</NavLink>
				</li>
				<li className='exit'>
					<NavLink exact to='/exit' className='exit__link'>
						Выход
					</NavLink>
				</li>
			</ul>
		</section>
	)
}
