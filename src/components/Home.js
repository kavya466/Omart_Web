import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function App() {
	return (
		<React.Fragment>
			{/* Display "Home" page content */}
			<div className='flex-container'>
				<div className='home-container container'>
					<h1 className='home-welcome-text'>
						Welcome to <img src='icon.svg' alt='OMart'></img>
					</h1>

					<p>Please select an option from below</p>

					<div className='home-buttons'>
						<Link to='/register'>
							<Button
								id='register-button'
								className='btn-block'
								type='primary'
								block={true}
							>
								Register
							</Button>
						</Link>

						{/* TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Add a Login button */}
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}
