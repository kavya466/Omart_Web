import 'antd/dist/antd.css'
import React, { useLayoutEffect } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import ipConfig from './ipConfig.json'

import Footer from './components/Footer'
import Header from './components/Header'

export const config = {
	endpoint: `http://${ipConfig.workspaceIp}:8082/api/v1`,
}

export default function App(props) {
	const location = useLocation()
	// Scroll to top if path changes
	useLayoutEffect(() => {
		window && window.scrollTo(0, 0)
	}, [location.pathname])

	return (
		<div className='App'>
			<Header history={['/register']} />
	
			<Switch>
				<Route path='/register'>
					<Register />
				</Route>
				<Route path='/login'>
					<Login />
				</Route>
				<Route path='/'>
					<Home />
				</Route>
			</Switch>
			{/* Display the footer */}
			<Footer></Footer>
		</div>
	)
}
