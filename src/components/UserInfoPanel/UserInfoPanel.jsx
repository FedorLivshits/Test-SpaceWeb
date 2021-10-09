import React from 'react'
import notification from '../../images/vector/notification-icon.svg'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { menuOpenSelector } from '../../redux/helpers/selectors'
import { setMenuOpen } from '../../redux/reducers/app-reducer'

export const UserInfoPanel = () => {
	const dispatch = useDispatch()
	const menuOpen = useSelector(menuOpenSelector)
	const onMenuOpen = () => {
		dispatch(setMenuOpen(!menuOpen))
	}
	return (
		<section className='user-info'>
			<div
				className={menuOpen ? 'burger-menu burger-menu--active' : 'burger-menu'}
				onClick={onMenuOpen}>
				<span></span>
				<span></span>
				<span></span>
			</div>
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
