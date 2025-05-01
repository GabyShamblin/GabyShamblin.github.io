import * as React from 'react';
import { useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Box, Chip, Grid, IconButton, Typography, Link, List, ListItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import './css/App.css';
import './css/typing.css';
import './css/styles.css';

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CircleIcon from '@mui/icons-material/Circle';

import { experience, education } from './data/resumeData.js';
import projects from './data/projectData.js';

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

const ListGrid = styled(Grid)(({project = false}) => ({
	textAlign: 'left', 
	flexShrink: 1,
	borderLeft: project ? '5px solid rgba(3, 152, 175, 0)' : '5px solid rgba(2, 232, 232, 0.5)',
}));

const ListDate = styled('div')(() => ({
	color: '#d1d1d1',
	fontSize: '16px',
	textAlign: 'right'
}));

const SkillChip = styled(Chip)(() => ({
	margin: 3,
	color: '#1efc0f',
	backgroundColor: 'rgba(30, 252, 15, 0.2)',
	border: '2px solid #1efc0f',
}));

const TimelineCircle = styled(CircleIcon)(() => ({
	position: 'absolute',
	color: '#027f8c',
	top: 0,
	right: '-31px',
}));



function Home() {
	useEffect(() => {
		document.title = 'Home';
	});
	const [path, setPath] = React.useState('');
	if (path !== window.location.pathname) {
		setPath(window.location.pathname);
	}

  return (
		<div className="App">
			{/* <div className='wrapper'>
				<div>
					<img src={logo} id='logo' alt='Gabriela Shamblin'/>
				</div>
				<div className='typing-home'>
					/* Student & Programmer
				</div>
			</div> */}

			<div className='wrapper'>
				<div className='typing-name'>
					/* Gabriela Shamblin */
				</div>
				<div className='subtitle'>
					Delivering Immersive Experiences, Solutions, and Innovation Through Cutting-Edge Development in VR Technologies
				</div>
			</div>

			<Grid container spacing={1}>
				<Grid container size={{xs:12, sm:3}} spacing={1} justifyContent='flex-start' alignItems='center' direction='column'>
					{/* Picture */}
					<Grid>
						<img id="me" src={me} alt="Me"/>
					</Grid>

					{/* Left align text and add lines with extend animation */}
					{/* Menu Buttons */}
					<Grid container justifyContent='center' alignContent='center' direction={{xs:'row', sm:'column'}}>

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

						{/* <Grid sx={{p:0.5, px:1, mr:0.2}}>
							<HashLink smooth to="/#contact"  
								style={{textDecoration: 'none'}}
							>
								<MenuText>
										<strong>Contact</strong>
										<MenuLine chars={7}/>
								</MenuText>
							</HashLink>
						</Grid> */}

					</Grid>
				</Grid>

				{/* Content Column */}
				<Grid size="grow">
					<section id='about'>
						<About/>
					</section>
					<section id='education'>
						<Education/>
					</section>
					<section id='experience'>
						<Experience/>
					</section>
					<section id='projects'>
						<Projects/>
					</section>
				</Grid>
			</Grid>
			<section id='contact'>
				<Contact/>
			</section>

			<div className='spacer'></div>

		</div>
  );
}

function About () {
	return (
		<CustomBox px={2} py={4} sx={{m: 'auto'}}>
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
					Currently enhancing expertise through a Master’s in Computer Science at the University of Central Florida
				</ListItem>
			</List>
		</CustomBox>
	);
}

function Education () {
	const list = [];
	for (let i = 0; i < education.length; i++) {
		list.push(<EducationBox edu={education[i]} key={i}/>);
	}

	return (
		<CustomBox px={2} py={4} sx={{m: 'auto'}}>
			{list}
		</CustomBox>
	);
}

function EducationBox (props) {
	const school = props.edu;

	return (
		<CustomBox sx={{m: 'auto'}}>
			<Grid container>
				<Grid size={2}>
					<div className='rel'>
						<ListDate>
							{school.graduation}
						</ListDate>
						<TimelineCircle/>
					</div>
				</Grid>
				<ListGrid size="grow" pl={2} ml={2} pb={1}>
					<div>
						{school.degree} | <i>{school.school}</i>
					</div>
					<List dense className='text-desc'>
						{school.concentration ? (
							<ListItem>
								{school.concentration}
							</ListItem>
						) : (<div/>)}
						{school.gpa ? (
							<ListItem>
								GPA: {school.gpa}
							</ListItem>
						) : (
							<div/>
						)}
					</List>
				</ListGrid>
			</Grid>
		</CustomBox>
	);
}

function Experience () {
	const list = [];
	for (let i = 0; i < 3; i++) {
		list.push(<ExperienceBox job={experience[i]}/>);
	}

	return (
		<CustomBox px={2} py={4} sx={{m: 'auto'}}>
			{list}

			{/* <RouteLink reloadDocument to="/resume" style={{textDecoration: 'none'}}>
				<CenterMenuText>
					See my resume
					<CenterMenuLine chars={13} sx={{margin: 'auto'}}/>
				</CenterMenuText>
			</RouteLink> */}
		</CustomBox>
	);
}

function ExperienceBox (props) {
	const job = props.job;

	return (
		<CustomBox sx={{m: 'auto'}}>
			<Grid container>
				<Grid size={2}>
					<div className='rel'>
						<ListDate>
							{job.dates}
						</ListDate>
						<TimelineCircle/>
					</div>
				</Grid>
				<ListGrid size="grow" pl={2} ml={2} pb={4}>
					<div>
						{job.title} | <i>{job.company}</i>
					</div>
					<List className='text-desc'>
						{job.description.map((desc, index) => (
							<ListItem key={index}>
								{desc}
							</ListItem>
						))}
						<ListItem>
							<Grid container>
								{job.skills.map(skill => (
									<Grid>
										<SkillChip label={skill}/>
									</Grid>
								))}
							</Grid>
						</ListItem>
					</List>
				</ListGrid>
			</Grid>
		</CustomBox>
	);
}

function Projects () {
	const list = [];
	for (let i = 0; i < 3; i++) {
		list.push(<ProjectsBox project={projects[i]} key={i}/>);
	}

	return (
		<CustomBox px={2} py={4} sx={{m: 'auto'}}>
			{list}

			{/* <RouteLink reloadDocument to="/portfolio" style={{textDecoration: 'none'}}>
				<CenterMenuText>
					See my portfolio
					<CenterMenuLine chars={13} sx={{margin: 'auto'}}/>
				</CenterMenuText>
			</RouteLink> */}
		</CustomBox>
	);
}

function ProjectsBox (props) {
	const project = props.project;

	if (project.media === "") {
		project.media = "placeholder.png";
	}

	return (
		<CustomBox sx={{m: 'auto'}}>
			<Link href={project.links[0].click} target="_blank" rel="noopener" underline='none'>
				<CustomBox link={true} p={2} sx={{m: 'auto', textAlign: 'left'}}>
					<Grid container>
						<Grid size={{xs: 12, sm: 2}} justifyContent='center'>
							<img src={require(`./public/thumbnails/${project.media}`)} id='thumbnail' alt='Project' className='center'/>
						</Grid>	
						<ListGrid size="grow" project={true} pl={2} ml={2}>
							<div>
								{project.title}
							</div>
							<List className='text-desc'>
								{project.description.map((desc, index) => (
									<ListItem key={index}>{desc}</ListItem>
								))}
								<ListItem>
									<Grid container>
										{project.skills.map(skill => (
											<Grid>
												<SkillChip label={skill}/>
											</Grid>
										))}
									</Grid>
								</ListItem>
							</List>
						</ListGrid>	
					</Grid>
				</CustomBox>
			</Link>
		</CustomBox>
	);
}

function Contact () {
	return (
		<CustomBox px={2} py={4} sx={{m: 'auto'}}>
			{/* Contact Icons */}
			<Grid container justifyContent='center'>
				{/* Github Icon */}
				<Grid>
					<Link href="https://github.com/GabyShamblin" 
					target="_blank" rel="noopener">
						<CustomIconButton aria-label='Github'>
							<GitHubIcon sx={{fontSize: 30}}/>
						</CustomIconButton>
					</Link>
				</Grid>
				{/* LinkedIn Icon */}
				<Grid>
					<Link href="https://www.linkedin.com/in/gabriela-shamblin-7416611b7/" 
					target="_blank" rel="noopener">
						<CustomIconButton aria-label='LinkedIn'>
							<LinkedInIcon sx={{fontSize: 30}}/>
						</CustomIconButton>
					</Link>
				</Grid>
				{/* Youtube Icon */}
				<Grid>
					<Link href="https://www.youtube.com/channel/UCzyOgtGvN-X7MkaP_amMYNg" 
					target="_blank" rel="noopener">
						<CustomIconButton aria-label='YouTube'>
							<YouTubeIcon sx={{fontSize: 30}}/>
						</CustomIconButton>
					</Link>
				</Grid>
				{/* Email Icon */}
				<Grid>
					<Link href="mailto:gabyshamblin@gmail.com" 
					target="_blank" rel="noopener">
						<CustomIconButton aria-label='Email'>
							<EmailIcon sx={{fontSize: 30}}/>
						</CustomIconButton>
					</Link>
				</Grid>

			</Grid>

			{/* <RouteLink reloadDocument to="/contact" style={{textDecoration: 'none'}}>
				<CenterMenuText>
					Contact me!
					<CenterMenuLine chars={10} sx={{margin: 'auto'}}/>
				</CenterMenuText>
			</RouteLink> */}
		</CustomBox>
	);
}



export default Home;
