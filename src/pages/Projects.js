import * as React from 'react';
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, Chip, Grid,	Link, List, ListItem, Typography } from '@mui/material';
import './css/App.css';
import './css/typing.css';

import projects from './data/projectData.js';

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

const ListGrid = styled(Grid)(({project = false}) => ({
	textAlign: 'left', 
	borderLeft: project ? '5px solid rgba(3, 152, 175, 0)' : '5px solid rgba(3, 152, 175, 0.5)',
}));

const SkillChip = styled(Chip)(() => ({
	margin: 3,
	color: '#1efc0f',
	backgroundColor: 'rgba(30, 252, 15, 0.2)',
	border: '2px solid #1efc0f',
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



function Projects() {
	useEffect(() => {
		document.title = 'Projects | Gabriela Shamblin';
	});

	console.log(projects);

  return (
		<React.Fragment>
			<div className="App">

				<div className='wrapper'>
					<div className='typing-projects'>
						/* Projects */
					</div>
				</div>

				{projects.map(p => (
					<ProjectBox project={p}/>
				))}
				
				<div className='spacer'></div>
			</div>
		</React.Fragment>
  );
}

function ProjectBox(props) {
	const project = props.project;

	if (project.media === "") {
		project.media = "placeholder.png";
	}

	return (
		<CustomBox link={true} p={2} sx={{m: 'auto', textAlign: 'left', mb: 1}}>
			<Grid container>
				<Grid container size="grow">
					<Grid size={{xs: 12, sm: 2}} sx={{m: 1}}>
						<img src={require(`./public/thumbnails/${project.media}`)} id='thumbnail' alt='Project' className='center'/>
					</Grid>	
					<ListGrid size="grow" project={true} pl={2} ml={2}>
						<div>
							{project.title} | <i>{project.dates}</i>
						</div>
						<List className='text-desc'>
							{project.description.map(desc => (
								<ListItem>{desc}</ListItem>
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
				<Grid container size={{sm: 12, md: 2}} alignItems='center' justifyContent='center'>
					{project.links.map(link => (
						<Grid sx={{marginLeft: '5px'}}>
							{link.file ? 
							<a href={link.file} download target='_blank' rel="noopener noreferrer">
								<CustomButton>
									{link.label}
								</CustomButton>
							</a>
							:
							<Link href={link.click} target="_blank" rel="noopener">
								<CustomButton>
									{link.label}
								</CustomButton>
							</Link>
							}
						</Grid>
					))}
				</Grid>
			</Grid>
		</CustomBox>
	);
}

export default Projects;
