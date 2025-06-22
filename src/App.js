import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Outlet } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';



const UpArrowLink = styled('div')(() => ({
	position: 'fixed',
	display: 'flex',
	bottom: 10,
	right: 35,
	height: '40px',
	width: '40px',
	justifyContent: 'center',
	alignItems: 'center',
	rotate: '90deg',
	color: 'rgba(30, 252, 15, 0.7)',
	transition: '0.2s',
	cursor: 'pointer',
	zIndex: 100,
	'&:hover': {
		color: 'rgba(30, 252, 15, 1)',
	},
	// border: '2px solid red',
}));

function App() {
	const scrollToTop = () => {
		window.scrollTo({top: 0, behavior: 'smooth'})
	};

  return (
		<React.Fragment>
			<div className="App-header">
				
				<UpArrowLink onClick={scrollToTop} style={{textDecoration: 'none'}}>
					<ArrowBackIosIcon sx={{fontSize: 40}}/>
				</UpArrowLink>

				{/* <footer>
					<Socials/>
					<p className='subtitle'>&#169; Gabriela Shamblin {new Date().getFullYear()}</p>
				</footer> */}

				<Outlet />
			</div>
		</React.Fragment>
  );
}

export default App;
