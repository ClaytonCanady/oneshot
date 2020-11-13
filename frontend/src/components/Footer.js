import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const Footer = () => {
	return (
		<footer className='footer'>
			<Container>
				<Row>
					<Col className='text-center py-3'>
						Be sure to stop by later, we're always adding new content!
					</Col>
					<Col className='text-center py-3'>
						<ul className='resources'>
							Other Resources
							<li>
								<a href='w'>Kobold Fight Club</a>
							</li>
							<li>
								<a href='w'>Kobold Fight Club</a>
							</li>
							<li>
								<a href='w'>Kobold Fight Club</a>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
