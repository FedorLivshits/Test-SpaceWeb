import React from "react"

export const SideBarLink = ({ path, icon, pageName, active }) => {
	return (
		<li
			className={
				active
					? 'sidebar__list-item sidebar__list-item--active'
					: 'sidebar__list-item'
			}>
			<a className='sidebar__list-link' href={path}>
				<img className='sidebar__list-icon' src={icon} alt='user-icon' />
				{pageName}
			</a>
		</li>
	)
}