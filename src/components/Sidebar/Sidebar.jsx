import React from 'react'
import logo from '../../images/vector/logo.svg'
import user from '../../images/vector/user-icon.svg'
import domen from '../../images/vector/domen-icon.svg'
import journal from '../../images/vector/journal-icon.svg'
import vps from '../../images/vector/vps-icon.svg'
import { SideBarLink } from './SidebarLink/SidebarLink'

export const Sidebar = () => {
	return (
		<aside className='sidebar'>
			<div className='sidebar__inner'>
				<a className='sidebar__logo' href='/#'>
					<img className='sidebar__logo-img' src={logo} alt='logo' />
				</a>
				<ul className='sidebar__list-items'>
					<SideBarLink path={'/#'} icon={user} pageName={'Аккаунт'} />
					<SideBarLink path={'/#'} icon={vps} pageName={'Vps'} />
					<SideBarLink path={'/#'} icon={domen} pageName={'Домены'} />
					<SideBarLink
						path={'/#'}
						icon={journal}
						pageName={'Бортовой журнал'}
						active={true}
					/>
				</ul>
			</div>
		</aside>
	)
}
