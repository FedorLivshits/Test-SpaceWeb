import React from 'react'
import { NavLink } from 'react-router-dom'

export const SideBarLink = ({ path, icon, pageName }) => {
	return (
		<li className='sidebar__list-item'>
			<NavLink className='sidebar__list-link' exact to={path}>
				<img className='sidebar__list-icon' src={icon} alt='user-icon' />
				{pageName}
			</NavLink>
		</li>
	)
}
