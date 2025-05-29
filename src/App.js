import * as React from 'react';
import { AppBar, Box, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { Outlet, Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const MenuText = styled(Typography)(() => ({
	fontFamily: 'monospace',
	fontSize: 24,
	color: "#a3aab4",
	transition: '0.2s',
	'&:hover': {
		color: "#ffffff",
	}
}));

const UpArrow = styled(Typography)(() => ({
	position: 'fixed',
	bottom: 10,
	right: 35,
  maxWidth: 100,
	rotate: '90deg',
	color: 'rgba(30, 252, 15, 0.5)',
	transition: '0.2s',
	'&:hover': {
		color: 'rgba(30, 252, 15, 1)',
	},
	// border: '2px solid #1efc0f',
}));

const pages = ['home', 'resume', 'projects', 'contact'];

function App() {
	const [path, setPath] = React.useState('');
	if (path !== window.location.pathname) {
		setPath(window.location.pathname);
	}
	// let notHome = /\w(?!#)/.test(path);
	
	const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

	function toTitleCase(str) {
		return str.replace(
			/\w\S*/g,
			function(txt) {
				return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
			}
		);
	}

  return (
		<React.Fragment>
			<div className="App-header">
				{/* <Box alignItems='flex-end' sx={{
					display: 'flex', 
					justifyContent: 'center',
					textAlign: 'center',
					minHeight: 50,
					minWidth: '95%',
					x: 0}}>

					{/* { notHome &&
						<Link to="/" onClick={() => setPath('/')} style={{textDecoration: 'none'}}>
							<MenuText>
								<div className='banner-align'>
									<ArrowBackIosIcon/> Back
								</div>
							</MenuText>
						</Link>
					} */}
					
					{/* <AppBar position="static" style={{ boxShadow: 'none' }} sx={{ backgroundColor: 'transparent' }}>
						<Container maxWidth="xl">
							<Toolbar disableGutters>

								{/* Collapsed Menu *
								<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
									<IconButton
										size="large"
										aria-label="navigation menu"
										aria-controls="menu-appbar"
										aria-haspopup="true"
										onClick={handleOpenNavMenu}
										color="inherit"
									>
										<MenuIcon />
									</IconButton>
									<Menu
										id="menu-appbar"
										anchorEl={anchorElNav}
										anchorOrigin={{
											vertical: 'bottom',
											horizontal: 'left',
										}}
										keepMounted
										transformOrigin={{
											vertical: 'top',
											horizontal: 'left',
										}}
										open={Boolean(anchorElNav)}
										onClose={handleCloseNavMenu}
										sx={{
											display: { xs: 'block', md: 'none' },
										}}
									>
										{pages.map((page) => (
											<MenuItem sx={{p:0.5, px:1, mr:0.2}}>
												<Link to={"/" + (page==='home' ? '' : page)} 
													onClick={() => setPath('/' + (page==='home' ? '' : page))} 
													style={{textDecoration: 'none'}}
												>
													<MenuText>
														<strong>{toTitleCase(page)}</strong>
													</MenuText>
												</Link>
											</MenuItem>
										))}
									</Menu>
								</Box>

								{/* Normal Menu *
								<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
									{pages.map((page) => (
										<Box sx={{p:0.5, px:1, mr:0.2}}>
											<Link to={"/" + (page==='home' ? '' : page)} 
												onClick={() => setPath('/' + (page==='home' ? '' : page))} 
												style={{textDecoration: 'none'}}
											>
												<MenuText>
													<strong>{toTitleCase(page)}</strong>
												</MenuText>
											</Link>
										</Box>
									))}
								</Box>
							</Toolbar>
						</Container>
					</AppBar>
				</Box> */}

				{/* <div className='half-spacer'></div> */}

				<HashLink smooth to={path + '#'} style={{textDecoration: 'none'}}>
					<UpArrow>
						<ArrowBackIosIcon fontSize='large'/>
					</UpArrow>
				</HashLink>

				<Outlet />
			</div>
		</React.Fragment>
  );
}

export default App;
