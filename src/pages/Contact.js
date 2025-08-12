import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Stack } from '@mui/material';
import { flexbox } from '@mui/system';
import './css/typing.css';

import { CustomIconButton, CustomBox, CustomButton, CustomTextField } from './Styled.js';

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import DescriptionIcon from '@mui/icons-material/Description';

import resume from './public/Gabriela Shamblin Resume 2025.pdf';
import cv from './public/Gabriela Shamblin CV.pdf';

import emailjs from '@emailjs/browser';



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
		<Grid container rowSpacing={1} columnSpacing={3} direction="row" justifyContent="center">
			<Grid>
				<Link to="https://github.com/GabyShamblin" 
				target="_blank" rel="noopener">
					<CustomIconButton aria-label='Github' title='GitHub'>
						<GitHubIcon fontSize='large'/>
					</CustomIconButton>
				</Link>
			</Grid>

			<Grid>
				<Link to="https://www.linkedin.com/in/gabriela-shamblin/" 
				target="_blank" rel="noopener">
					<CustomIconButton aria-label='LinkedIn' title='LinkedIn'>
						<LinkedInIcon fontSize='large'/>
					</CustomIconButton>
				</Link>
			</Grid>
			
			<Grid>
				<Link to="https://www.youtube.com/@gabyshamblin" 
				target="_blank" rel="noopener">
					<CustomIconButton aria-label='YouTube' title='YouTube'>
						<YouTubeIcon fontSize='large'/>
					</CustomIconButton>
				</Link>
			</Grid>

			<Grid>
				<Link to="mailto:gabyshamblin@gmail.com" 
				target="_blank" rel="noopener">
					<CustomIconButton aria-label='Email' title='Send an email'>
						<EmailIcon fontSize='large'/>
					</CustomIconButton>
				</Link>
			</Grid>

			<Grid container size={12} spacing={3} direction="row" justifyContent="center">
				<Grid>
					<a href={resume} download="Gabriela Shamblin Resume.pdf" target='_blank' rel="noopener noreferrer">
						<CustomIconButton aria-label='Resume' title='Download my resume'>
							{/* <DescriptionIcon fontSize='large'/>  */}
							Resume
						</CustomIconButton>
					</a>
				</Grid>

				<Grid>
					<a href={cv} download="Gabriela Shamblin CV.pdf" target='_blank' rel="noopener noreferrer">
						<CustomIconButton aria-label='CV' title='Download my CV'>
							{/* <DescriptionIcon fontSize='large'/>  */}
							CV
						</CustomIconButton>
					</a>
				</Grid>
			</Grid>
		</Grid>
	);
}

export { Contact, Socials };
