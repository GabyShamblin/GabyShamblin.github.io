import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, Button, Grid, IconButton, Typography, Stack, TextField } from '@mui/material';
import { flexbox } from '@mui/system';
import './css/typing.css';

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

import emailjs from '@emailjs/browser';

const CustomBox = styled(Box)(({link = false}) => ({
  maxWidth: 1200, 
	color: 'white',
	m: 'auto',
	p: 1,
	fontSize: '18px',
	borderRadius: 10,
	transition: '0.2s',
	'&:hover': {
		color: "#ffffff",
		backgroundColor: link ? 'rgba(3, 152, 175, 0.15)' : 'rgba(3, 152, 175, 0)'
	}
	// border: '2px dashed red'
}));

const CustomButton = styled(Button)(() => ({
	minWidth: 100,
	backgroundColor: "rgba(2, 232, 232, 0.2)", 
	color: '#02e8e8', 
	border: '2px solid #02e8e8',
	borderRadius: 50,
	'&:hover': {
		backgroundColor: "rgba(2, 232, 232, 0)",
	}
}));

const CustomIconButton = styled(IconButton)(() => ({
	color: "#d1d1d1", 
	borderRadius: 50,
	'&:hover': {
		color: "white", 
	}
}));

const CustomTextField = styled(TextField)(() => ({
	input: {
		color: 'white'
	},
	"& .MuiInput-root": {
		color: "#000",
		fontFamily: "Arial",
		fontWeight: "bold",
		// Bottom border
		"&:before": {
			borderColor: "#d1d1d1",
			borderWidth: "2px",
		},
		// Border on focus
		"&:after": {
			borderColor: "white",
			borderWidth: "3px",
		},
		":hover:not(.Mui-focused)": {
			"&:before": {
				borderColor: "#fff",
				borderWidth: "2px",
			},
		},
	},
	// Label
	"& .MuiInputLabel-standard": {
		color: "#d1d1d1",
		fontWeight: "bold",
		"&.Mui-focused": {
			color: "white",
		},
		":hover:not(.Mui-focused)": {
			"&:before": {
				color: "#fff",
			},
		},
	},
}));

const MenuText = styled(Typography)(() => ({
	position: 'absolute',
	top: 15,
	left: 50,
  maxWidth: 100,
	fontSize: 24,
	color: "#a3aab4",
	transition: '0.2s',
	'&:hover': {
		color: "#ffffff",
	},
}));



function Contact() {
	// useEffect(() => {
	// 	document.title = 'Contact | Gabriela Shamblin';
	// });

	const [toSend, setToSend] = useState({
		name: '',
		email: '',
		message: '',
	});

	const onSubmit = (e) => {
		e.preventDefault();
		console.log(toSend);

		emailjs.send('service_gu427bp', 'template_jqizbmj', toSend, '_wu6HQWfsViVJ8OBD')
      .then((result) => {
				console.log("Email result: " + result.text);
				alert("Message sent");
      }, (error) => {
				console.log("EMAIL SEND ERROR");
				console.log(error.text);
				alert("Message failed to send\n" + error.text)
      });
	};
	const handleChange = (e) => {
		setToSend({ ...toSend, [e.target.name]: e.target.value });
	};

  return (
		<React.Fragment>

			<CustomBox component='form' sx={{display: flexbox, justifyContent: 'center', m:'auto'}}>
				<Stack spacing={2} sx={{pb: 2, maxWidth: '500px', m: 'auto'}}>
					<CustomTextField 
						required
						id="name" 
						name="name"
						label="Name"
						value={toSend.name}
						variant="standard"
						onChange={handleChange}/>
					<CustomTextField 
						required
						id="email" 
						name="email"
						label="Email Address"
						value={toSend.email}
						variant="standard"
						onChange={handleChange}/>
					<CustomTextField 
						required
						multiline
						rows={5}
						id="message" 
						name="message"
						label="Message"
						value={toSend.message}
						variant="standard"
						onChange={handleChange}/>
						<div className="g-recaptcha" data-sitekey="your_site_key"></div>
				</Stack>

				<CustomButton 
					aria-label='Send message' 
					size='large'
					type='submit'
					onClick={onSubmit}
				>
					<EmailIcon/>
					<Typography sx={{fontSize: 16, p: 1}}>
						Send a message
					</Typography>
				</CustomButton>
			</CustomBox>
		</React.Fragment>
  );
}

function Socials() {
	return (
		<Grid container spacing={3} direction="row" justifyContent="center">
			<Grid>
				<Link to="https://github.com/GabyShamblin" 
				target="_blank" rel="noopener">
					<CustomIconButton aria-label='Github'>
						<GitHubIcon fontSize='large'/>
					</CustomIconButton>
				</Link>
			</Grid>

			<Grid>
				<Link to="https://www.linkedin.com/in/gabriela-shamblin-7416611b7/" 
				target="_blank" rel="noopener">
					<CustomIconButton aria-label='LinkedIn'>
						<LinkedInIcon fontSize='large'/>
					</CustomIconButton>
				</Link>
			</Grid>
			
			<Grid>
				<Link to="https://www.youtube.com/channel/UCzyOgtGvN-X7MkaP_amMYNg" 
				target="_blank" rel="noopener">
					<CustomIconButton aria-label='YouTube'>
						<YouTubeIcon fontSize='large'/>
					</CustomIconButton>
				</Link>
			</Grid>

			<Grid>
				<Link to="mailto:gabyshamblin@gmail.com" 
				target="_blank" rel="noopener">
					<CustomIconButton aria-label='Email'>
						<EmailIcon fontSize='large'/>
					</CustomIconButton>
				</Link>
			</Grid>
		</Grid>
	);
}

export { Contact, Socials };
