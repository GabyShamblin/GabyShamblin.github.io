import * as React from 'react';
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import './css/App.css';
import './css/typing.css';

import projects from './data/projectData.js';
import { Socials } from './Contact.js';
import { CustomButton, SkillChip } from './Styled.js';



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
				<h3 className='subtitle'>Project pages are a work in progress</h3>
				<div className='half-spacer'/>

				<Grid container spacing={5}>
					<Grid size={{sm: 12, md: 4}} justifyContent='center' className='sticky-sidebar'>
						<LeftSide project={project}/>
					</Grid>
					<Grid container size='grow' spacing={1} className='text-desc'>
						<RightSide description={project.description} media={project.media}/>
					</Grid>
				</Grid>
				
				<div className='spacer'/>

				<footer>
					<Socials/>
					<p className='subtitle'>&#169; Gabriela Shamblin {new Date().getFullYear()}</p>
				</footer>
			</div>
		</React.Fragment>
	);
}

function LeftSide({project}) {
	return (
		<React.Fragment>
			<h1 className='title'>
				{project.title}
			</h1>
			<div className="subtitle">
				{project.summary}
			</div>

			<div className='half-spacer'/>

			<Grid container spacing={1} justifyContent='center'>
				{project.skills.map(skill => (
					<Grid>
						<SkillChip label={skill}/>
					</Grid>
				))}
			</Grid>

			<div className='half-spacer'/>
				
			<Grid container spacing={2} justifyContent='center'>
				{project.links.map(link => (
					<Grid>
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
		</React.Fragment>
	)
}

function RightSide({description, media}) {
	const maxLength = Math.max(description.length, media.length);
	let sections = [];

	for (let i = 0; i < maxLength; i++) {
		if (i < description.length) {
			sections.push(
				<Grid>
					<p>{description[i].split('\n').map((line, j) => (
						<React.Fragment key={j}>
							{line}<br/><br/>
						</React.Fragment>
					))}</p>
				</Grid>
			)
		}
		if (i < media.length) {
			sections.push(
				<Grid className='center-image'>
					<img src={require(`./public/thumbnails/${media[i]}`)} id='within-text' alt='Project'/>
				</Grid>
			)
		}
	}

	return (
		<React.Fragment>
			{sections.map((_, i) => (
				<React.Fragment key={i}>
					{sections[i]}
				</React.Fragment>
			))}
		</React.Fragment>
	);
}

export default ProjectPage;
