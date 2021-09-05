import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Input, message } from 'antd'
import React from 'react'
import { withRouter } from 'react-router-dom'
import { config } from '../App'

/**
 * @class Login component handles the Login page UI and functionality
 *
 * Contains the following fields
 *
 * @property {boolean} state.loading
 *    Indicates background action pending completion. When true, further UI actions might be blocked
 * @property {string} state.username
 *    User given field for username
 * @property {string} state.password
 *    User given field for password
 */
class Login extends React.Component {
	constructor() {
		console.log('login')
		super()
		this.state = {
			loading: false,
			username: '',
			password: '',
		}
	}

	login = async () => {
		message.info('Login logic not implemented yet')
	}

	/**
	 * JSX and HTML goes here
	 * We have a text field and a password field (each with data binding to state), and a submit button that calls login()
	 */
	render() {
		return (
			<React.Fragment>
				{/* Display Login fields */}
				<div className='flex-container'>
					<div className='login-container container'>
						<h1>Login to QKart</h1>

						<Input
							className='input-field'
							prefix={<UserOutlined className='site-form-item-icon' />}
							placeholder='Username'
							onChange={(e) => {
								this.setState({
									username: e.target.value,
								})
							}}
						/>

						<Input.Password
							className='input-field'
							prefix={<LockOutlined className='site-form-item-icon' />}
							placeholder='Password'
							onChange={(e) => {
								this.setState({
									password: e.target.value,
								})
							}}
						/>

						<Button
							loading={this.state.loading}
							type='primary'
							onClick={this.login}
						>
							Login
						</Button>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default withRouter(Login)
