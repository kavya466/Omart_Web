import React from 'react'
import './Notification.css'

export default class Notification extends React.Component {
	render() {
		return (
			<div className='topbanner'>
				<div className='container noticontainer'>
					<p>
						Get 50% off on your first purchase. Use Code:{' '}
						<span className='offercode'>OMARTNEW</span>
					</p>
				</div>
			</div>
		)
	}
}
