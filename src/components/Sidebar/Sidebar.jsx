import React from 'react'
import logo from '../../images/vector/logo.svg'
import user from '../../images/vector/user-icon.svg'
import domen from '../../images/vector/domen-icon.svg'
import journal from '../../images/vector/journal-icon.svg'
import vps from '../../images/vector/vps-icon.svg'
import { SideBarLink } from './SidebarLink/SidebarLink'
import { NavLink } from 'react-router-dom'

export const Sidebar = () => {
	return (
		<aside className='sidebar'>
			<div className='sidebar__inner'>
				<NavLink className='sidebar__logo' to='/main'>
					<img className='sidebar__logo-img' src={logo} alt='logo' />
				</NavLink>
				<ul className='sidebar__list-items'>
					<SideBarLink path={'/user'} icon={user} pageName={'Аккаунт'} />
					<SideBarLink path={'/vps'} icon={vps} pageName={'Vps'} />
					<SideBarLink path={'/domen'} icon={domen} pageName={'Домены'} />
					<SideBarLink path={'/'} icon={journal} pageName={'Бортовой журнал'} />
				</ul>
			</div>
		</aside>
	)
}
