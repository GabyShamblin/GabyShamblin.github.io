import * as React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
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


function GetProjectFromId(id) {
	for (let i = 0; i < projects.length; i++) {
		if (projects[i].id == id) {
			return projects[i];
		}
	}
}


function ProjectPage() {
	const { id } = useParams();
	const project = GetProjectFromId(id);

	useEffect(() => {
		document.title = `${project.title} | Gabriela Shamblin`;
	});
 
	console.log(project);

	return (
		<React.Fragment>
			<div className="App">

				<div className='wrapper'>
					<h1 className='title'>
						{project.title}
					</h1>
					<Grid container size={{sm: 12, md: 2}} alignItems='center' justifyContent='center'>
						{project.links.map(link => (
							<Grid sx={{marginLeft: '5px'}}>
								{link.file ? 
								<Link to={link.file} download target='_blank' rel="noopener noreferrer">
									<CustomButton>
										{link.label}
									</CustomButton>
								</Link>
								:
								<Link to={link.click} target="_blank" rel="noopener">
									<CustomButton>
										{link.label}
									</CustomButton>
								</Link>
								}
							</Grid>
						))}
					</Grid>
				</div>
				<div className='half-spacer'></div>

				<h3 className='subtitle'>Project pages are a work in progress</h3>
				<Grid container spacing={1} className='text-desc' sx={{margin: '10px'}}>
					<Grid size={{xs: 12, sm: 6}}>
						<p>{project.description[0]}</p>
					</Grid>
					<Grid size='grow'>
						<p>{project.description[1]}</p>
					</Grid>
				</Grid>

				<Grid container>
					{project.skills.map(skill => (
						<Grid>
							<SkillChip label={skill}/>
						</Grid>
					))}
				</Grid>
				<img src={require(`./public/thumbnails/${project.media}`)} id='large' alt='Project' className='center'/>

				
				<div className='spacer'></div>
			</div>
		</React.Fragment>
	);
}


export default ProjectPage;
