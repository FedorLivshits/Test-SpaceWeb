import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setMenuOpen } from '../../../redux/reducers/app-reducer'

export const SideBarLink = ({ path, icon, pageName }) => {
	const dispatch = useDispatch()

	const onMenuOpen = () => {
		dispatch(setMenuOpen(false))
	}
	return (
		<li className='sidebar__list-item'>
			<NavLink
				className='sidebar__list-link'
				exact
				to={path}
				onClick={onMenuOpen}>
				<img className='sidebar__list-icon' src={icon} alt='user-icon' />
				{pageName}
			</NavLink>
		</li>
	)
}
