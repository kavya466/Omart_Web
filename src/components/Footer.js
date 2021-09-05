import { Footer as AntdFooter } from 'antd/lib/layout/layout'
import React from 'react'

import '../css/Footer.css'

export default class Footer extends React.Component {
	render() {
		return (
			<AntdFooter className='footer'>
				<div className='footer-content'>
					<div class='footer-item cstatistics'>
						<img src='icon.svg' alt='OMart'></img>
						<p>100+ Deliveries</p>
						<p>10+ Customers</p>
					</div>
					<div class='footer-item cstatistics'>
						<img src='icon.svg' alt='OMart'></img>
					</div>
					<div class='footer-item cstatistics'>
						<img src='icon.svg' alt='OMart'></img>
					</div>
					<div class='footer-item cstatistics'>
						<img src='icon.svg' alt='OMart'></img>
					</div>
					<div class='footer-item cstatistics'>
						<img src='icon.svg' alt='OMart'></img>
					</div>
				</div>
			</AntdFooter>
		)
	}
}
