import * as React from 'react';
import { useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Grid, List, ListItem } from '@mui/material';
import './css/App.css';
import './css/blobs.css';
import './css/typing.css';
import './css/styles.css';

import { experience, teaching, research, education } from './data/resumeData.js';
import { projects, publications } from './data/projectData.js';
import { ProjectsBox, PublicationsBox, TimelineDegree, TimelineJob } from './Boxes.js';
import { Contact, Socials } from './Contact.js';
import { CenterMenuText, CenterMenuLine, CustomBox } from './Styled.js';

import logo from './public/logo_blue.png';
import me from './public/picture_cruise.JPG';



function Home() {
	useEffect(() => {
		document.title = 'Gabriela Shamblin';
	});
	const [path, setPath] = React.useState('');
	if (path !== window.location.pathname) {
		setPath(window.location.pathname);
	}

	const scrollWithOffset = (el) => {
		const yOffset = -80;
		const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
		window.scrollTo({ top: y, behavior: 'smooth' });
	}

  return (
		<div>
			{/* <div className='wrapper'>
				<div>
					<img src={logo} id='logo' alt='Gabriela Shamblin'/>
				</div>
				<div className='page-header typing-home'>
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
					<h1 className='page-header typing-name'>
						/* Gabriela Shamblin */
					</h1>
					<div className='subtitle'>
						Developer with a passion for virtual reality, immersive systems, and user-focused design
					</div>
				</div>

				{/* About section */}
				<Grid container spacing={1}>
					<Grid container size={{xs:12, sm:3}} spacing={1} justifyContent='center' alignItems='center' direction='column'>
						{/* Picture */}
						<Grid>
							<img id="me" src={me} alt="Me"/>
						</Grid>
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

				<div className='spacer'/>

				{/* Menu Buttons */}
				<div class='sticky-navbar'>
					<Grid container spacing={1} justifyContent='space-evenly'>

						{/* <Grid>
							<HashLink smooth to="/#about" style={{textDecoration: 'none'}}>
								<CenterMenuText>
										<strong>About</strong>
										<CenterMenuLine chars={6}/>
								</CenterMenuText>
							</HashLink>
						</Grid> */}

						<Grid>
							<HashLink smooth to="/#education" scroll={scrollWithOffset} style={{textDecoration: 'none'}}>
								<CenterMenuText>
										<strong>Education</strong>
										<CenterMenuLine chars={9}/>
								</CenterMenuText>
							</HashLink>
						</Grid>

						<Grid>
							<HashLink smooth to="/#experience" scroll={scrollWithOffset} style={{textDecoration: 'none'}}>
								<CenterMenuText>
										<strong>Experience</strong>
										<CenterMenuLine chars={10}/>
								</CenterMenuText>
							</HashLink>
						</Grid>

						<Grid>
							<HashLink smooth to="/#publications" scroll={scrollWithOffset} style={{textDecoration: 'none'}}>
								<CenterMenuText>
										<strong>Publications</strong>
										<CenterMenuLine chars={11}/>
								</CenterMenuText>
							</HashLink>
						</Grid>

						<Grid>
							<HashLink smooth to="/#projects" scroll={scrollWithOffset} style={{textDecoration: 'none'}}>
								<CenterMenuText>
										<strong>Projects</strong>
										<CenterMenuLine chars={8}/>
								</CenterMenuText>
							</HashLink>
						</Grid>

						{/* <Grid>
							<HashLink smooth to="/#projects" scroll={scrollWithOffset} style={{textDecoration: 'none'}}>
								<CenterMenuText>
										<strong>Skills</strong>
										<CenterMenuLine chars={5}/>
								</CenterMenuText>
							</HashLink>
						</Grid> */}

						<Grid>
							<HashLink smooth to="/#contact" scroll={scrollWithOffset} style={{textDecoration: 'none'}}>
								<CenterMenuText>
										<strong>Contact</strong>
										<CenterMenuLine chars={7}/>
								</CenterMenuText>
							</HashLink>
						</Grid>

					</Grid>
				</div>
				<div className='spacer'></div>



				{/* Education */}
				<section id='education'>
					<h2>Education</h2>
					<Education/>
				</section>
				<div className='spacer'></div>

				{/* Experience */}
				<section id='experience'>
					<h2>Research Experience</h2>
					<Research/>

					<h2>Professional Experience</h2>
					<Experience/>

					<h2>Teaching Experience</h2>
					<Teaching/>
				</section>
				<div className='spacer'></div>

				{/* Skills */}
				{/* <div className='spacer'></div> */}

				{/* Publications */}
				<section id='publications'>
					<h2>Publications</h2>
					<Publications/>
				</section>
				<div className='spacer'></div>

				{/* Projects */}
				<section id='projects'>
					<h2>Recent Projects</h2>
					<Projects/>
				</section>
				<div className='spacer'></div>

				{/* Contact */}
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
						{/* <b>Aspiring Full Stack Developer</b> with a passion for building immersive experiences and developing innovative solutions through virtual reality technologies and full-stack applications. Academic foundation includes advanced studies in computer science with a focus on VR integration, mixed reality environments, and interactive user experiences. */}
						<b>Aspiring Researcher</b> specializing in virtual reality and immersive technologies, with a strong foundation in computer science and mixed reality environments.
					</p>
				</ListItem>
				<ListItem>
					<p className='nerf-p'>
						{/* <b>High-Potential Professional</b>, poised to deliver on corporate objectives and develop creative solutions to complex challenges, such as VR simulations for surgical training and algorithm-driven web applications. */}
						<b>Passionate</b> about human-computer interaction and user experience, focusing on creating immersive VR environments that priotitize intuitive design and meaningful user engagement.
					</p>
				</ListItem>
				<ListItem>
					<p className='nerf-p'>
						<b>Dedicated Team Player</b> who thrives on solving problems, guiding others to meet project goals, and cultivating innovative ideas.
					</p>
				</ListItem>
				<ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
					<p className='nerf-p' style={{marginBottom: 3}}>
						<b>Research Interests:</b>
					</p>
					<List dense sx={{ listStyleType: 'disc', pl: '20px', pt: 0}}>
						<ListItem sx={{ display: 'list-item' }}>
							Virtual Reality (VR), Augmented Reality (AR), and Mixed Reality (MR)
						</ListItem>
						<ListItem sx={{ display: 'list-item' }}>
							Human-Computer Interaction (HCI) and User Experience (UX)
						</ListItem>
						<ListItem sx={{ display: 'list-item' }}>
							Medical Simulation and Education
						</ListItem>
					</List>
					
				</ListItem>
				{/* <ListItem>
					Recently completed a Master’s in Computer Science at the University of Central Florida
				</ListItem> */}
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

function Teaching () {
	const list = [];
	for (let i = 0; i < teaching.length; i++) {
		list.push(<TimelineJob job={teaching[i]}/>);
	}

	return (
		<CustomBox px={2} py={4} sx={{m: 'auto'}}>
			{list}
		</CustomBox>
	);
}

function Research () {
	const list = [];
	for (let i = 0; i < research.length; i++) {
		list.push(<TimelineJob job={research[i]}/>);
	}

	return (
		<CustomBox px={2} py={4} sx={{m: 'auto'}}>
			{list}
		</CustomBox>
	);
}

function Publications () {
	const list = [];
	for (let i = 0; i < publications.length; i++) {
		list.push(<PublicationsBox pub={publications[i]}/>);
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
