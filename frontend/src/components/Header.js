import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';
const Header = () => {
	return (
		<header className='header'>
			<Navbar expand='lg' variant='dark' collapseOnSelect>
				<Container>
					<LinkContainer to='/'>
						<Navbar.Brand>One Shot Ideas</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='px-5'>
							<LinkContainer to='/one-shots'>
								<Nav.Link>One Shots</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/monsters'>
								<Nav.Link>Monsters</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/classes'>
								<Nav.Link>Classes</Nav.Link>
							</LinkContainer>

							<LinkContainer to='/campaigns'>
								<Nav.Link>Campaign Settings</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/login'>
								<Nav.Link>Login/Signup</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
