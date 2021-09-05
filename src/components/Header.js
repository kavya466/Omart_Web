import { Button } from 'antd'
import { Link } from 'react-router-dom'
import React from 'react'

import Notification from './Notification'

import '../css/Header.css'
import '../css/Main.css'

export default class Header extends React.Component {
	root = () => {
		this.props.history.push('/')
	}

	explore = () => {
		this.props.history.push('/products')
	}

	register = () => {
		this.props.history.push('/register')
	}

	login = () => {
		this.props.history.push('/login')
	}

	logout = () => {
		localStorage.removeItem('username')
		localStorage.removeItem('token')
		this.props.history.push('/')
	}

	render() {
		return (
			<div className='wholeheader'>
				<Notification></Notification>

				<div className='header'>
					{/* Display links based on if the user's logged in or not */}
					<div className='header-action'>
						<React.Fragment>
							<Link to='/products/clothing'>
								<div className='header-link' onClick={this.explore}>
									Clothing
								</div>
							</Link>
							<Link to='/products/services'>
								<div className='header-link' onClick={this.login}>
									Services
								</div>
							</Link>
							<Link to='/products/festive'>
								<div className='header-link'>
									<div className='header-link' onClick={this.login}>
										Festive
									</div>
								</div>
							</Link>
						</React.Fragment>
					</div>
					{/* Shows OMart title image */}
					<Link to='/products'>
						<div className='header-title' onClick={this.root}>
							<img src='icon.svg' alt='QKart-icon'></img>
						</div>
					</Link>

					{/* Display links based on if the user's logged in or not */}
					<div className='header-action'>
						{localStorage.getItem('username') ? (
							<React.Fragment>
								<img
									src='avatar.png'
									alt='profile'
									className='profile-image'
								></img>

								<div className='header-info'>
									{localStorage.getItem('username')}
								</div>

								<Button type='primary' onClick={this.logout}>
									Logout
								</Button>
							</React.Fragment>
						) : (
							<React.Fragment>
								<Link to='/products'>
									<div className='header-link'>Explore</div>
								</Link>
								<Link to='/login'>
									<div className='header-link'>Login</div>
								</Link>
								<Link to='/register'>
									<div className='header-link'>
										<Button className='header-link' onClick={this.register}>
											Register
										</Button>
									</div>
								</Link>
							</React.Fragment>
						)}
					</div>
				</div>
			</div>
		)
	}
}
