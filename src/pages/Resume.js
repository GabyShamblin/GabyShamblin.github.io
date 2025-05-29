import * as React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, Button, Grid, Typography } from '@mui/material';
import './css/typing.css';

import { experience, education, skills, certs } from './data/resumeData.js';
import { TimelineDegree, TimelineJob, SkillSection, Cert } from './Boxes.js';

import FeedIcon from '@mui/icons-material/Feed';
import resume from './public/Gabriela Shamblin Resume 2025.pdf';



const CustomButton = styled(Button)(() => ({
	minWidth: 200,
	backgroundColor: "rgba(2, 232, 232, 0.2)", 
	color: '#02e8e8', 
	border: '2px solid #02e8e8',
	borderRadius: 50,
	'&:hover': {
		backgroundColor: "rgba(2, 232, 232, 0)",
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


function Resume() {
	useEffect(() => {
		document.title = 'Resume | Gabriela Shamblin';
	});

  return (
		<div className="App">

			<div className='wrapper'>
				<div className='typing-resume'>
					/* Resume */
				</div>
			</div>

				{/* <MenuText>
					<strong>PDF Version</strong>
					<MenuLine chars={11}/>
				</MenuText> */}

			<Link to={resume} download target='_blank' rel="noopener noreferrer">
			<CustomButton 
				aria-label='Send message' 
				size='large'
			>
				<FeedIcon/>
				<Typography sx={{fontSize: 16, p: 1}}>
					PDF Version
				</Typography>
			</CustomButton>
			</Link>

			{/* Education */}
			<CustomBox p={2} sx={{m: 'auto', textAlign: 'left'}}>

				<Typography variant='h2' sx={{fontSize: 24, letterSpacing: 5, p: 2, pt: 5}}>
					Education
				</Typography>

				{education.map(degree => (
					<TimelineDegree degree={degree}/>
				))}

			</CustomBox>

			{/* Experience */}
			<CustomBox p={2} sx={{m: 'auto', textAlign: 'left'}}>

				<Typography variant='h2' sx={{fontSize: 24, letterSpacing: 5, p: 2}}>
					Experience
				</Typography>

				{experience.map(job => (
					<TimelineJob job={job}/>
				))}

			</CustomBox>

			{/* Skills */}
			<CustomBox p={2} sx={{m: 'auto', textAlign: 'left'}}>

				<Typography variant='h2' sx={{fontSize: 24, letterSpacing: 5, p: 2}}>
					Skills
				</Typography>

				{/* Tech Skills */}
				<Grid container spacing={1} direction="column" sx={{textAlign: 'center'}}>
					{skills.map(field => (
						<SkillSection field={field}/>
					))}
				</Grid>

				{/* Certifications */}
				<CustomBox sx={{display:'flex', m: 'auto', mb: 1, p: 4, justifyContent:'center'}}>
					<Grid container spacing={1.5} justifyContent='center'>
						<Cert cert={certs[0]}/>
					</Grid>

				</CustomBox>

			</CustomBox>

			<div className='spacer'></div>

		</div>
  );
}



export default Resume;
