import * as React from 'react';
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import './css/App.css';
import './css/typing.css';

import projects from './data/projectData.js';
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
				<Grid container className='text-desc' spacing={1}>
					{project.description.map(desc => (
						<Grid size={{xs:12, sm:6}}>
							<p>{desc.split('\n').map((line, i) => (
								<React.Fragment key={i}>
									{line}<br/><br/>
								</React.Fragment>
							))}</p>
						</Grid>
					))}
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
