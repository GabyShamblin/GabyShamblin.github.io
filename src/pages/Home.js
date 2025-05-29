import * as React from 'react';
import { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Box, Grid, IconButton, Stack, Typography, Link, List, ListItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import { flexbox } from '@mui/system';
import './css/App.css';
import './css/blobs.css';
import './css/typing.css';
import './css/styles.css';

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

import { experience, education } from './data/resumeData.js';
import projects from './data/projectData.js';
import { ProjectsBox, TimelineDegree, TimelineJob } from './Boxes.js';
import { Contact, Socials } from './Contact.js';

import logo from './public/logo_blue.png';
import me from './public/picture_cruise.JPG';



const MenuText = styled(Typography)(() => ({
  width: 125,
	fontSize: 20,
	color: "#a3aab4",
	textAlign: 'left',
	transition: '0.2s',
	'&:hover': {
		color: "#ffffff",
		'> div': {
			backgroundColor: '#ffffff',
			width: '100%',
		},
	},
	// border: '1px dashed #ffffff',
}));

const MenuLine = styled('div')(({chars = 0}) => ({
	height: '2px',
	width: `${chars}ch`,
	backgroundColor: '#a3aab4',
	transition: '0.2s',
}));

const CenterMenuText = styled(Typography)(() => ({
  width: 150,
	margin: 'auto',
	color: "#a3aab4",
	textAlign: 'center',
	transition: '0.2s',
	'&:hover': {
		color: "#ffffff",
		'> div': {
			backgroundColor: '#ffffff',
			width: '100%',
		},
	},
	// border: '1px dashed #ffffff',
}));

const CenterMenuLine = styled('div')(({chars = 0}) => ({
	height: '2px',
	margin: 'auto',
	width: `${chars}ch`,
	backgroundColor: '#a3aab4',
	transition: '0.2s',
}));

const CustomIconButton = styled(IconButton)(() => ({
	color: "#a3aab4", 
	borderRadius: 50,
	'&:hover': {
		color: "white", 
	}
}));

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
	},
	// border: '2px dashed red'
}));



function Home() {
	useEffect(() => {
		document.title = 'Gabriela Shamblin';
	});
	const [path, setPath] = React.useState('');
	if (path !== window.location.pathname) {
		setPath(window.location.pathname);
	}

  return (
		<div>
			{/* <div className='wrapper'>
				<div>
					<img src={logo} id='logo' alt='Gabriela Shamblin'/>
				</div>
				<div className='typing-home'>
					/* Student & Programmer
				</div>
			</div> */}

			{/* <div className='container'>
				<div className='shape-blob'></div>
				<div className='shape-blob one'></div>
				<div className='shape-blob two'></div>
				<div className='shape-blob three'></div>
				<div className='shape-blob four'></div>
			</div> */}

			<div className="App">
				<div className='half-spacer'/>
				<div className='wrapper'>
					<h1 className='typing-name'>
						/* Gabriela Shamblin */
					</h1>
					<div className='subtitle'>
						Delivering Immersive Experiences, Solutions, and Innovation Through Cutting-Edge Development in VR Technologies
					</div>
				</div>

				<Grid container spacing={1}>
					<Grid container size={{xs:12, sm:3}} spacing={1} justifyContent='center' alignItems='center' direction='column'>
						{/* Picture */}
						<Grid>
							<img id="me" src={me} alt="Me"/>
						</Grid>

						{/* Left align text and add lines with extend animation */}
						{/* Menu Buttons */}
						{/* <Grid container justifyContent='center' alignContent='center' direction={{xs:'row', sm:'column'}}>

							<Grid sx={{p:0.5, px:1, mr:0.2}}>
								<HashLink smooth to="/#about" 
									style={{textDecoration: 'none'}}
								>
									<MenuText>
											<strong>About</strong>
											<MenuLine chars={5}/>
									</MenuText>
								</HashLink>
							</Grid>

							<Grid sx={{p:0.5, px:1, mr:0.2}}>
								<HashLink smooth to="/#education" 
									style={{textDecoration: 'none'}}
								>
									<MenuText>
											<strong>Education</strong>
											<MenuLine chars={10}/>
									</MenuText>
								</HashLink>
							</Grid>

							<Grid sx={{p:0.5, px:1, mr:0.2}}>
								<HashLink smooth to="/#experience" 
									style={{textDecoration: 'none'}}
								>
									<MenuText>
											<strong>Experience</strong>
											<MenuLine chars={10}/>
									</MenuText>
								</HashLink>
							</Grid>

							<Grid sx={{p:0.5, px:1, mr:0.2}}>
								<HashLink smooth to="/#projects"  
									style={{textDecoration: 'none'}}
								>
									<MenuText>
											<strong>Projects</strong>
											<MenuLine chars={7}/>
									</MenuText>
								</HashLink>
							</Grid>

							<Grid sx={{p:0.5, px:1, mr:0.2}}>
								<HashLink smooth to="/#contact"  
									style={{textDecoration: 'none'}}
								>
									<MenuText>
											<strong>Contact</strong>
											<MenuLine chars={7}/>
									</MenuText>
								</HashLink>
							</Grid>

						</Grid> */}
					</Grid>

					{/* Content Column */}
					<Grid size="grow">
						<section id='about'>
							<About/>
						</section>
					</Grid>
				</Grid>
				<div>
					<Socials/>
				</div>


				{/* <section id='education'>
					<Education/>
				</section>
				<section id='experience'>
					<Experience/>
				</section> */}
				<div className='spacer'></div>
				<section id='projects'>
					<h2>Recent Projects</h2>
					<Projects/>
				</section>
				<div className='spacer'></div>
				<section id='contact'>
					<h2>Contact Me!</h2>
					<Contact/>
				</section>

				<div className='spacer'></div>

				<footer>
					<Socials/>
					<p className='subtitle'>&#169; Gabriela Shamblin {new Date().getFullYear()}</p>
				</footer>
			</div>
		</div>
  );
}

function About () {
	return (
		<CustomBox px={2} py={4} sx={{m: 'auto'}}>
			{/* <Typography>
				Hi! I'm an early career developer with a passion for building immersive, intuitive experiences, whether that's through virtual reality or user-centered web interfaces.

				I first started coding in high school because I had an interest in creating Roblox games, so I took an online class that Summer using Python and fell in love. I continued coding, making small side projects, and eventually decided to purse both a Bachelor's and Master's in Computer Science at the University of Central Florida.

				[FINISH]
			</Typography> */}
			<List dense>
				<ListItem>
					<p className='nerf-p'>
						<b>Aspiring Full Stack Developer</b> with a passion for building immersive experiences and developing innovative solutions through virtual reality technologies and full-stack applications. Academic foundation includes advanced studies in computer science with a focus on VR integration, mixed reality environments, and interactive user experiences.
					</p>
				</ListItem>
				<ListItem>
					<p className='nerf-p'>
						<b>High-Potential Professional</b>, poised to deliver on corporate objectives and develop creative solutions to complex challenges, such as VR simulations for surgical training and algorithm-driven web applications.
					</p>
				</ListItem>
				<ListItem>
					<p className='nerf-p'>
						<b>Dedicated Team Player</b>, who thrives on solving problems, guiding others to meet project goals, and cultivating innovative ideas.
					</p>
				</ListItem>
				<ListItem>
					Recently completed a Master’s in Computer Science at the University of Central Florida
				</ListItem>
			</List>
		</CustomBox>
	);
}

function Education () {
	const list = [];
	for (let i = 0; i < education.length; i++) {
		list.push(<TimelineDegree degree={education[i]} key={i}/>);
	}

	return (
		<CustomBox px={2} py={4} sx={{m: 'auto'}}>
			{list}
		</CustomBox>
	);
}

function Experience () {
	const list = [];
	for (let i = 0; i < 3; i++) {
		list.push(<TimelineJob job={experience[i]}/>);
	}

	return (
		<CustomBox px={2} py={4} sx={{m: 'auto'}}>
			{list}
		</CustomBox>
	);
}

function Projects () {
	const list = [];
	for (let i = 0; i < projects.length; i++) {
		list.push(
			<Grid size={{xs: 12, sm: 6, md: 4}}>
				<ProjectsBox project={projects[i]} key={i}/>
			</Grid>
		);
	}

	return (
		<CustomBox px={2} py={4} sx={{m: 'auto'}}>
			<Grid container>
				{list}

				{/* <RouteLink reloadDocument to="/portfolio" style={{textDecoration: 'none'}}>
					<CenterMenuText>
						See my portfolio
						<CenterMenuLine chars={13} sx={{margin: 'auto'}}/>
					</CenterMenuText>
				</RouteLink> */}
			</Grid>
		</CustomBox>
	);
}



export default Home;
