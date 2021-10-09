import React from 'react'
import './scss/style.scss'
import { Sidebar } from './components/Sidebar/Sidebar'
import { UserInfoPanel } from './components/UserInfoPanel/UserInfoPanel'
import { ArticlesPanel } from './components/ArticlesPanel/ArticlesPanel'
import { Footer } from './components/Footer/Footer'
import { Route } from 'react-router-dom'

const App = () => {
	return (
		<div className='app'>
			<div className='wrapper'>
				<Sidebar />
				<div className='content'>
					<UserInfoPanel />
					<Route exact path='/' render={() => <ArticlesPanel />} />
				</div>
				<Footer />
			</div>
		</div>
	)
}

export default App
